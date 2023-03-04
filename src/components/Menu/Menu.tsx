import { Link } from "react-router-dom"
import css from "./menu.module.css"
import categories from "../../assets/categories.json"

export const Menu = () => {

       return (
              <ul className={css.list}>
                     {categories.map((category) =>
                            <Link to={`/categories/${category.type}`} key={category.id} className={css.categoriesLink}>
                                   <p className={css.categories}>{category.label}</p>
                            </Link>)}
              </ul>
       )

}