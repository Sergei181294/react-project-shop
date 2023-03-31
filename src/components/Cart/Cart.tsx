import { useAppSelector,useAppDispatch } from "hooks/hooks"
import { Breadcrumb, Divider, Image, Button } from "antd"
import { Link,useNavigate } from "react-router-dom"
import css from "./cart.module.css"
import { getGoodsFromCart, getTotalCountItemsInCart } from "store/cart/selectors"
import { useEffect } from "react"
import { actions, GoodInCart } from "store/cart/slice"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { getIsAuth } from "store/auth/selectors"



export const Cart = () => {

       const commonCount = useAppSelector(getTotalCountItemsInCart)
       const goodsInCart = useAppSelector(getGoodsFromCart)

       const commonPrice = goodsInCart.reduce((acc, obj) => acc + (obj.count * +obj.good.price), 0)

       const dispatch = useAppDispatch()
       const navigate = useNavigate()
       const isAuth = useAppSelector(getIsAuth)

       const addProduct = (good: GoodInCart) => {
              dispatch(actions.addGoodInCart({ ...good, count: good.count + 1 }))
       }

       const deleteProduct = (good: GoodInCart) => {
              dispatch(actions.addGoodInCart({ ...good, count: good.count - 1 }))
       }

       useEffect(() => {
              dispatch(actions.getCartData())
       }, [])

       return (
              <>
                     {!isAuth ? navigate("/login") :
                            <>
                                   <Breadcrumb>
                                          <Breadcrumb.Item>
                                                 <Link to="/">Главная страница</Link>
                                          </Breadcrumb.Item>
                                          <Breadcrumb.Item>Корзина</Breadcrumb.Item>
                                   </Breadcrumb>
                                   <div className={css.cartWrapper}>
                                          {goodsInCart.length === 0 ?
                                                 <h2 className={css.emptyCart}>В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее.</h2>
                                                 :
                                                 <>
                                                        <div>
                                                               <ul className={css.listGoodsInCart}>
                                                                      {
                                                                             goodsInCart.map((good) => (
                                                                                    <li key={good.good.id}>
                                                                                           <div className={css.goodInCart}>
                                                                                                  <div className={css.infoWrapper}>
                                                                                                         <Image className={css.icon} width={150} height={150} src={good.good.img} alt="icon" />
                                                                                                         <div className={css.blockInfoGoodInCart}>
                                                                                                                <p className={css.name}>{good.good.label}</p>
                                                                                                                <p className={css.description}>{good.good.description}</p>
                                                                                                                <p className={css.price}>{Number(good.good.price) * good.count} руб.</p>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div className={css.blockButton}>
                                                                                                         {/* @ts-ignore */}
                                                                                                         <Button shape="circle" icon={<PlusOutlined />} onClick={() => addProduct(good)} />
                                                                                                         <p>{good.count}</p>
                                                                                                         {/* @ts-ignore */}
                                                                                                         <Button shape="circle" icon={<MinusOutlined />} onClick={() => deleteProduct(good)} />
                                                                                                  </div>
                                                                                           </div>
                                                                                           <Divider />
                                                                                    </li>
                                                                             ))}
                                                               </ul>
                                                        </div>
                                                        <div className={css.cartPriceBlock}>
                                                               <h2>Количество товаров в корзине: {commonCount}</h2>
                                                               <h2>Оформить заказ на сумму: {commonPrice} руб.</h2>
                                                        </div>
                                                 </>}

                                   </div>
                            </>
                     }
              </>
       )
}