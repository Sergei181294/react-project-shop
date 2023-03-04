import { Link } from "react-router-dom"
import { useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore } from "../../store/categories/selectors"
import { actionsCategories } from "../../store/categories/reducer"
import css from "./menu.module.css"

export const Menu = () => {

       const categories = useSelector(getCategoriesFromStore)
       const dispatch = useDispatch()

       const fetchCategories = useCallback(() => dispatch(actionsCategories.categoriesOnBack() as any), [dispatch])

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