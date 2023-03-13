import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Breadcrumb } from "antd"
import { Link, useParams } from "react-router-dom"
import css from "./cart.module.css"
import { getTotalCountItemsInCart } from "../../store/cart/selectors"
import { GoodInCart } from "../GoodInCart"
import { getGoodsItemsFromCart } from "../../store/cart/selectors"


export const Cart = () => {



       const goods = useSelector(getGoodsItemsFromCart);
       const totalCount = useSelector(getTotalCountItemsInCart);

       const uniqueGoods = Array.from(new Set(goods));


       return (
              <>
                     <Breadcrumb>
                            <Breadcrumb.Item>
                                   <Link to="/" >Главная страница</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Корзина</Breadcrumb.Item>
                     </Breadcrumb>
                     <div className={css.cartWrapper}>
                            <div>
                                   <ul className={css.listGoodsInCart}>
                                          {uniqueGoods
                                                 .map((good) => <li key={good.id}>
                                                        <GoodInCart good={good} totalCount={0} />
                                                 </li>
                                                 )}
                                   </ul>
                            </div>
                            <div>
                                   <h2>Количество товаров в корзине: {totalCount}</h2>
                            </div>

                     </div>
              </>
       )
}