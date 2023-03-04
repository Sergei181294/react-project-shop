import { FC } from "react"
import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import css from "./cart.module.css"
import { Good } from "../../types/Good"

interface GoodInCart {
       good: Good;
       count: number; 
       id: string;
}

export const Cart = () => {
       return (
              <>
                     <Breadcrumb>
                            <Breadcrumb.Item>
                                   <Link to="/" >Главная страница</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Корзина</Breadcrumb.Item>
                     </Breadcrumb>
                     <h2>Hello</h2>
              </>
       )
}