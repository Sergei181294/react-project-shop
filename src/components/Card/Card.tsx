import { FC } from "react"
import css from "./card.module.css"
import { Link } from "react-router-dom"

interface CardProps {
       id: string;
       image: string;
       title: string;
       description: string;
       price: string;

}

export const Card: FC<CardProps> = ({ id, image, title, price, description }) => {
       return (
              <Link to={`/goods/${id}`} className={css.cardWrapper}>
                     <img className={css.icon} src={image} alt="icon"/>
                     <p className={css.name}>{title}</p>
                     <p className={css.description}>{description}</p>
                     <p className={css.price}>{price}</p>
              </Link>
       )
}