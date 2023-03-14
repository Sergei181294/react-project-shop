import { useParams, Link } from "react-router-dom";
import css from "./productPage.module.css"
import { Breadcrumb, Image, Divider, Button } from "antd";
import { Loader } from "../../common/Loader";
import { ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore } from "../../../store/categories/selectors"
import { getGoodsFromStore, getLoadStatusGoods } from "../../../store/goods/selectors";
import { actionsCategories } from "../../../store/categories/slice"
import { actionsGoods } from "../../../store/goods/slice";
import { actions } from "../../../store/cart/slice";
import { LOAD_STATUSES_TYPES } from "../../../types";

export const ProductPage = () => {
       const [btnValue, setBtnValue] = useState("Положить в корзину")

       const categories = useSelector(getCategoriesFromStore)
       const goods = useSelector(getGoodsFromStore)
       const loadStatusGoods = useSelector(getLoadStatusGoods)
       const dispatch = useDispatch()

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack() as any)

       const fetchGoods = () => dispatch(actionsGoods.goodsOnBack() as any)

       useEffect(() => {
              fetchCategories();
              fetchGoods();
              window.scrollTo(0, 0)
       }, [])


       const { id } = useParams();
       const good = goods.find((good) => good.id === id)
       const category = categories.find((category) => category.id === good?.categoryTypeId)

       const putInCartHandler = () => {
              setBtnValue("Уже в корзине");
              dispatch(actions.setItemInCart(good as any))
       }

       return (
              <div className={css.goodWrapper}>
                     <Loader isLoading={loadStatusGoods === LOAD_STATUSES_TYPES.SET_LOADING} />
                     {loadStatusGoods === LOAD_STATUSES_TYPES.SET_LOADED &&
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
                                                 {good?.label}
                                          </Breadcrumb.Item>
                                   </Breadcrumb>
                                   <div className={css.productContainer}>
                                          <Image className={css.productPicture} src={good?.img} alt="icon" />
                                          <div className={css.informationBlock}>
                                                 <h2 className={css.productTitle}>{good?.label}</h2>
                                                 <p className={css.productDescription}>{good?.description}</p>
                                                 <Divider className={css.divider} />
                                                 <p className={css.productPrice}>{good?.price}</p>
                                                 {btnValue === "Положить в корзину" && <Button
                                                        className={css.btnPutInCart}
                                                        icon={<ShoppingCartOutlined />}
                                                        onClick={() => putInCartHandler()}
                                                 >
                                                        {btnValue}
                                                 </Button>}
                                                 {btnValue === "Уже в корзине" && <Button
                                                        className={css.btnGoToCart}
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
              </div>
       )
}