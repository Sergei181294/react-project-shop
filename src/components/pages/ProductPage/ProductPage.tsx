import { useParams, Link } from "react-router-dom";
// import goods from "../../../assets/goods.json"

import css from "./productPage.module.css"
import { Breadcrumb, Image, Divider, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons"

import { useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore } from "../../../store/categories/selectors"
import { getGoodsFromStore } from "../../../store/goods/selectors";
import { actionsCategories } from "../../../store/categories/reducer"
import { actionsGoods } from "../../../store/goods/reducer";

export const ProductPage = () => {

       const categories = useSelector(getCategoriesFromStore)
       const goods = useSelector(getGoodsFromStore)
       const dispatch = useDispatch()

       const fetchCategories = useCallback(() => dispatch(actionsCategories.categoriesOnBack() as any), [dispatch])

       const fetchGoods = useCallback(() => dispatch(actionsGoods.goodsOnBack() as any), [dispatch])

       useEffect(() => {
              fetchCategories();
              fetchGoods();
              window.scrollTo(0, 0)
       }, [])


       const { id } = useParams();
       const good = goods.find((good) => good.id === id)
       const category = categories.find((category) => category.type === good?.categoryTypeId)


       return (
              <div className={css.goodWrapper}>
                     <Breadcrumb className={css.breadcrumb}>
                            <Breadcrumb.Item>
                                   <Link to="/" >Главная страница</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                   <Link to={`/categories/${good?.categoryTypeId}`} >
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
                                   <Button className={css.btnPutInCart} icon={<ShoppingCartOutlined />}>Положить в корзину</Button>

                            </div>

                     </div>
              </div>
       )
}