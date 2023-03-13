import { Link } from "react-router-dom"
import css from "./notFound.module.css"

export const NotFound = () => {
      return (
       <div>
              <h2 className={css.notFound}>Категория не найдена, вернуться <Link to="/">назад</Link></h2>
       </div>
      ) 
}