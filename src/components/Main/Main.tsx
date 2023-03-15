import { Menu, GoodCategory, CarouselSlider } from ".."
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPopularCategoriesFromStore } from "../../store/popularCategories/selectors"
import { actionsPopularCategories } from "../../store/popularCategories/slice"
import css from "./main.module.css"


export const Main = () => {

       const categories = useSelector(getPopularCategoriesFromStore)
       const dispatch = useDispatch()
       
       const fetchCategories = () => dispatch(actionsPopularCategories.popularCategoriesOnBack() as any)

       useEffect(() => {
              fetchCategories();
       }, [])

       return (
              <>
                     <div className={css.menuWrapper}>
                            <Menu />
                            <CarouselSlider />
                     </div>

                     {categories.map(category => <GoodCategory key={category.category.id} category={category} />)}
              </>
       )
}