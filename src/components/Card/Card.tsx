import { FC } from "react"
import css from "./card.module.css"

interface CardProps {
       image: string;
       title: string;
       description: string;
       price: string;
}

export const Card: FC<CardProps> = ({ image, title, price, description }) => {
       return (
              <div className={css.cardWrapper}>
                     <img className={css.icon} src={image} alt="icon"/>
                     <p className={css.name}>{title}</p>
                     <p className={css.description}>{description}</p>
                     <p className={css.price}>{price}</p>
              </div>
       )
}