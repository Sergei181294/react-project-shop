import { FC } from "react"
import { Link } from "react-router-dom"
import { Card } from ".."
import css from "./goodCategory.module.css"
import goods from "../../assets/goods.json"

interface GoodCategoryProps {
       category: {
              id: string;
              type: string;
              label: string;
       }

}

export const GoodCategory: FC<GoodCategoryProps> = ({ category }) => {
       return (

              <div>
                     <Link to="/" className={css.categoriesLink}>
                            <h2 className={css.title}>{category.label}</h2>
                     </Link>
                     <ul className={css.list}>
                            {goods
                                   .filter((item) => item.categoryTypeId === category.type)
                                   .map((item) =>
                                          <li key={item.id}>
                                                 <Card
                                                        image={item.img}
                                                        title={item.label}
                                                        description={item.description}
                                                        price={item.price}
                                                 />
                                          </li>
                                   )}
                     </ul>
              </div>

       )
}