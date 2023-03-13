import { useParams, Link } from "react-router-dom"
import { GoodCategory, Loader } from "../.."
import css from "./categoryPage.module.css"
import { LOAD_STATUSES_TYPES } from "../../../types"
import { Breadcrumb } from "antd"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore, getLoadStatusCategories } from "../../../store/categories/selectors"
import { getLoadStatusGoods } from "../../../store/goods/selectors"
import { actionsCategories } from "../../../store/categories/slice"


export const CategoryPage = () => {

       const categories = useSelector(getCategoriesFromStore)
       const dispatch = useDispatch()
       const loadStatusGoods = useSelector(getLoadStatusGoods)
       const loadStatusCategories = useSelector(getLoadStatusCategories)

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack() as any)
       useEffect(() => {
              fetchCategories();
              window.scrollTo(0, 0)
       }, [])

       const { type } = useParams();

       const category = categories.find((category) => category.type === type)


       return (

              <div className={css.categoryWrapper}>
                     <Loader isLoading={loadStatusCategories === LOAD_STATUSES_TYPES.SET_LOADING} />
                     {loadStatusCategories === LOAD_STATUSES_TYPES.SET_ERROR && (<span>Будет попап...</span>)}

                     {loadStatusCategories === LOAD_STATUSES_TYPES.SET_LOADED &&
                            <>
                                   <Breadcrumb className={css.breadcrumb}>
                                          <Breadcrumb.Item>
                                                 <Link to="/" >Главная страница</Link>
                                          </Breadcrumb.Item>
                                          <Breadcrumb.Item>
                                                 {category!.label}
                                          </Breadcrumb.Item>
                                   </Breadcrumb>
                                   <GoodCategory category={category as any} />
                            </>
                     }


              </div>
       )
}