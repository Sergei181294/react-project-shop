import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { getCategoriesFromStore } from "store/categories/selectors"
import { actionsCategories } from "store/categories/slice"
import css from "./menu.module.css"
import { getIsAuth } from "store/auth/selectors"

export const Menu = () => {

       const categories = useAppSelector(getCategoriesFromStore)
       const dispatch = useAppDispatch()
       const isAuth = useAppSelector(getIsAuth)

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack())

       useEffect(() => {
              fetchCategories();
       }, [])
       return (

              <ul className={css.list}>
                     {categories.map((category) =>

                            <li key={category.id}>
                                   <Link to={`/categories/${category.type}`} className={css.categoriesLink}>
                                          <p className={css.categories}>{category.label}</p>
                                   </Link>
                            </li>

                     )}
                     {isAuth &&
                            <li>
                                   <Link to={`/goods`} className={css.categoriesLink}>
                                          <p className={css.categories}>Все товары</p>
                                   </Link>
                            </li>}
              </ul>
       )

}