import { FC } from "react"
import css from "./cart.module.css"

interface CartProps {
       image: string;
       title: string;
       price: string;
}

export const Cart: FC<CartProps> = ({ image, title, price }) => {
       return (
              <div className={css.cartWrapper}>
                     <img className={css.icon} src={image} alt="icon"/>
                     <p className={css.name}>{title}</p>
                     <p className={css.price}>{price}</p>
              </div>
       )
}