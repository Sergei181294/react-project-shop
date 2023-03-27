import { useParams, Link } from "react-router-dom"
import { GoodCategory, Loader } from "../.."
import css from "./categoryPage.module.css"
import { Good, LOAD_STATUSES_TYPES } from "types"
import { Breadcrumb } from "antd"
import { useEffect, useState, useMemo} from "react"
import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { getCategoriesFromStore, getLoadStatusCategories } from "store/categories/selectors"
import { getLoadStatusGoods } from "store/goods/selectors"
import { actionsCategories } from "store/categories/slice"
import { getGoods } from "api"



export const CategoryPage = () => {
       const [goods, setGoods] = useState<Good[]>([])

       const { type } = useParams();

       const categories = useAppSelector(getCategoriesFromStore)
      
       
       const dispatch = useAppDispatch()
       const loadStatusGoods = useAppSelector(getLoadStatusGoods)
       const loadStatusCategories = useAppSelector(getLoadStatusCategories)

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack())

       useEffect(() => {
              fetchCategories();
              window.scrollTo(0, 0)
       }, [])

       const category = categories.find((category) => category.type === type)
       
       

       useEffect(() => {
              if (category) {
                     getGoods({ categoryTypeIds: category.id }).then(data => setGoods(data.items))
              } 
       }, [category])


       return (
              <div className={css.categoryWrapper}>
                     <Loader isLoading={loadStatusCategories === LOAD_STATUSES_TYPES.SET_LOADING || loadStatusGoods === LOAD_STATUSES_TYPES.SET_LOADING} />
                     {loadStatusCategories === LOAD_STATUSES_TYPES.SET_ERROR || loadStatusGoods === LOAD_STATUSES_TYPES.SET_ERROR && (<span>Категория не найдена, вернуться назад</span>)}

                     {loadStatusCategories === LOAD_STATUSES_TYPES.SET_LOADED &&
                            <>
                                   <Breadcrumb className={css.breadcrumb}>
                                          <Breadcrumb.Item>
                                                 <Link to="/">Главная страница</Link>
                                          </Breadcrumb.Item>
                                          <Breadcrumb.Item>
                                                 {category!.label}
                                          </Breadcrumb.Item>
                                   </Breadcrumb>
                                   <GoodCategory label={category!.label} items={goods} />
                            </>
                     }
              </div>
       )
}