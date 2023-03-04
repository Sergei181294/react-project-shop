import { useParams, Link } from "react-router-dom";
import goods from "../../../assets/goods.json"
import categories from "../../../assets/categories.json"
import css from "./productPage.module.css"
import { Breadcrumb, Image, Divider, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons"

export const ProductPage = () => {

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
                                   <Divider className={css.divider}/>
                                   <p className={css.productPrice}>{good?.price}</p>
                                   <Button className={css.btnPutInCart} icon={<ShoppingCartOutlined />}>Положить в корзину</Button>

                            </div>

                     </div>
              </div>
       )
}