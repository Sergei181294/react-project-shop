import { Menu, GoodCategory } from ".."
import categories from "../../assets/categories.json"


export const Main = () => {
       return (
              <>
                     <Menu />
                     {categories.map(category => <GoodCategory key={category.id} category={category}/>)}
              </>
       )
}