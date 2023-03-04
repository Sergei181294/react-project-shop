import { Menu, GoodCategory, CarouselSlider } from ".."
import categories from "../../assets/categories.json"
import css from "./main.module.css"


export const Main = () => {
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