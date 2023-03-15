import { FC } from "react"
import css from "./card.module.css"
import { Link } from "react-router-dom"
import { Good } from "types/Good"


export const Card: FC<Good> = ({ id, img, label, price, description }) => {
       return (
              <Link to={`/goods/${id}`} className={css.cardWrapper}>
                     <img className={css.icon} src={img} alt="icon"/>
                     <p className={css.name}>{label}</p>
                     <p className={css.description}>{description}</p>
                     <p className={css.price}>{price}</p>
              </Link>
       )
}