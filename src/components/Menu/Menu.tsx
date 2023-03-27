import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { getCategoriesFromStore } from "store/categories/selectors"
import { actionsCategories } from "store/categories/slice"
import css from "./menu.module.css"

export const Menu = () => {

       const categories = useAppSelector(getCategoriesFromStore)
       const dispatch = useAppDispatch()

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack())

       useEffect(() => {
              fetchCategories();
       }, [])
       return (

              <ul className={css.list}>
                     {categories.map((category) =>
                            <Link to={`/categories/${category.type}`} key={category.id} className={css.categoriesLink}>
                                   <p className={css.categories}>{category.label}</p>
                            </Link>)}
              </ul>
       )

}