import { Menu, GoodCategory, CarouselSlider } from ".."
import { useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore } from "../../store/categories/selectors"
import { actionsCategories } from "../../store/categories/reducer"
import css from "./main.module.css"


export const Main = () => {

       const categories = useSelector(getCategoriesFromStore)
       const dispatch = useDispatch()

       const fetchCategories = useCallback(() => dispatch(actionsCategories.categoriesOnBack() as any), [dispatch])
       
       useEffect(() => {
              fetchCategories();
       }, [])

       return (
              <>
                     <div className={css.menuWrapper}>
                            <Menu />
                            <CarouselSlider />
                     </div>

                     {categories.map(category => <GoodCategory key={category.id} category={category} />)}
              </>
       )
}