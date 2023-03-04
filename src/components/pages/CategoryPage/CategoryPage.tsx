import { useParams, Link } from "react-router-dom"
import { GoodCategory } from "../.."
import css from "./categoryPage.module.css"
import { Breadcrumb } from "antd"
import { useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore } from "../../../store/categories/selectors"
import { actionsCategories } from "../../../store/categories/reducer"


export const CategoryPage = () => {

       const categories = useSelector(getCategoriesFromStore)
       const dispatch = useDispatch()

       const fetchCategories = useCallback(() => dispatch(actionsCategories.categoriesOnBack() as any), [dispatch])
       
       useEffect(() => {
              fetchCategories();
              window.scrollTo(0, 0)
       }, [])

       const { type } = useParams();

       const category = categories.find((category) => category.type === type)


       return (

              <div className={css.categoryWrapper}>

                     <Breadcrumb className={css.breadcrumb}>
                            <Breadcrumb.Item>
                                   <Link to="/" >Главная страница</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                   {category!.label}
                            </Breadcrumb.Item>
                     </Breadcrumb>
                     <GoodCategory category={category as any} />
              </div>
       )
}