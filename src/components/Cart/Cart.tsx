import { useAppSelector } from "../../hooks/hooks"
import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import css from "./cart.module.css"
import { GoodInCart } from "../GoodInCart"



export const Cart = () => {

       
       

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
                                          
                                          
                                   </ul>
                            </div>
                            <div>
                                   <h2>Количество товаров в корзине: {0}</h2>
                            </div>

                     </div>
              </>
       )
}