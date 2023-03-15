import { FC } from "react"
import { Link } from "react-router-dom"
import { Card } from ".."
import css from "./goodCategory.module.css"
import { Category, Good } from "types"


export interface GoodCategoryProps {
       category: {
              category: Category,
              items: Good[]
       }

}

export const GoodCategory: FC<GoodCategoryProps> = ({ category }) => {

       return (
              <div>
                     <Link to={`/categories/${category.category.type}`} className={css.categoriesLink}>
                            <h2 className={css.title}>{category.category.label}</h2>
                     </Link>
                     <ul className={css.list}>
                            {category.items.map((item) =>
                                   <li key={item.id}>
                                          <Card
                                                 categoryTypeId={item.categoryTypeId}
                                                 id={item.id}
                                                 img={item.img}
                                                 label={item.label}
                                                 description={item.description}
                                                 price={item.price}
                                          />
                                   </li>
                            )}
                     </ul>
              </div>

       )
}