import { useParams, Link } from "react-router-dom";
import css from "./productPage.module.css"
import { Breadcrumb, Image, Divider, Button } from "antd";
import { Loader } from "../..";
import { NotFound } from "../NotFound";
import { ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { getCategoriesFromStore } from "store/categories/selectors"
import { getGoodsFromStore, getLoadStatusGoods } from "store/goods/selectors";
import { actionsCategories } from "store/categories/slice"
import { actionsGoods } from "store/goods/slice";
import { LOAD_STATUSES_TYPES, Good } from "types";
import { getGoods } from "api";
import { addGoodInCart } from "store/cart/slice"
import { getGoodsFromCart } from "store/cart/selectors";
import { getIsAuth } from "store/auth/selectors";

export const ProductPage = () => {
       const [btnValue, setBtnValue] = useState("Положить в корзину")

       const { id } = useParams();

       const categories = useAppSelector(getCategoriesFromStore)
       const goods = useAppSelector(getGoodsFromStore)
       const isAuth = useAppSelector(getIsAuth)

       const loadStatusGoods = useAppSelector(getLoadStatusGoods)
       const dispatch = useAppDispatch()


       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack())

       const fetchGoods = () => dispatch(actionsGoods.goodsOnBack({ ids: id }))

       useEffect(() => {
              fetchCategories();
              fetchGoods();
              window.scrollTo(0, 0)
       }, [id])

       const category = categories.find((category) => category.id === goods[0]?.categoryTypeId)
       const myGoodInCart = useAppSelector(getGoodsFromCart)
       const countOneProduct = myGoodInCart.find((good) => good.id === id)?.count ?? 0;


       const putInCartHandler = () => {
              setBtnValue("Уже в корзине");
              dispatch(addGoodInCart({ good: goods[0], count: countOneProduct + 1 }))
       }

       return (
              <div className={css.goodWrapper}>
                     <Loader isLoading={loadStatusGoods === LOAD_STATUSES_TYPES.SET_LOADING} />
                     {loadStatusGoods === LOAD_STATUSES_TYPES.SET_LOADED &&
                            <>
                                   {goods.length === 0 ? <NotFound text="Продукт не найден, вернуться " /> :
                                          <>
                                                 <Breadcrumb className={css.breadcrumb}>
                                                        <Breadcrumb.Item>
                                                               <Link to="/">Главная страница</Link>
                                                        </Breadcrumb.Item>
                                                        <Breadcrumb.Item>
                                                               <Link to={`/categories/${category?.type}`} >
                                                                      {category?.label}
                                                               </Link>
                                                        </Breadcrumb.Item>
                                                        <Breadcrumb.Item>
                                                               {goods[0]?.label}
                                                        </Breadcrumb.Item>
                                                 </Breadcrumb>
                                                 <div className={css.productContainer}>
                                                        <Image className={css.productPicture} src={goods[0]?.img} alt="icon" />
                                                        <div className={css.informationBlock}>
                                                               <h2 className={css.productTitle}>{goods[0]?.label}</h2>
                                                               <p className={css.productDescription}>{goods[0]?.description}</p>
                                                               <Divider className={css.divider} />
                                                               <p className={css.productPrice}>{goods[0]?.price}</p>
                                                               {btnValue === "Положить в корзину" && isAuth && <Button
                                                                      className={css.btnPutInCart}
                                                                      // @ts-ignore
                                                                      icon={<ShoppingCartOutlined />}
                                                                      onClick={putInCartHandler}
                                                               >
                                                                      {btnValue}
                                                               </Button>}
                                                               {btnValue === "Уже в корзине" && <Button
                                                                      className={css.btnGoToCart}
                                                                      // @ts-ignore
                                                                      icon={<CheckOutlined />}
                                                               >
                                                                      <Link className={css.linkGoToCart} to="/api/cart">
                                                                             {btnValue}
                                                                      </Link>
                                                               </Button>}
                                                        </div>
                                                 </div>
                                          </>
                                   }
                            </>

                     }
              </div>
       )
}