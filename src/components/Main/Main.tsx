import { Menu, GoodCategory, CarouselSlider } from ".."
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { getPopularCategoriesFromStore } from "../../store/popularCategories/selectors"
import { actionsPopularCategories } from "../../store/popularCategories/slice"
import css from "./main.module.css"


export const Main = () => {

       const categories = useAppSelector(getPopularCategoriesFromStore)
       const dispatch = useAppDispatch()

       const fetchCategories = () => dispatch(actionsPopularCategories.popularCategoriesOnBack())

       useEffect(() => {
              fetchCategories();
       }, [])

       return (
              <>
                     <div className={css.menuWrapper}>
                            <Menu />
                            <CarouselSlider />
                     </div>

                     {categories.map(category => <GoodCategory
                            key={category.category.id}
                            label={category.category.label}
                            items={ category.items}
                            type={category.category.type}
                     />)}
              </>
       )
}