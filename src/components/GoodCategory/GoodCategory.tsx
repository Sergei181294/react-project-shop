import { FC } from "react"
import { Link } from "react-router-dom"
import { Card } from ".."
import css from "./goodCategory.module.css"
import { Good } from "types"


export interface GoodCategoryProps {
       label: string,
       items: Good[],
       type?:string,
}



export const GoodCategory: FC<GoodCategoryProps> = ({ label, items, type }) => {


       return (
              <div>
                     <Link to={`/categories/${type}`} className={css.categoriesLink}>
                            <h2 className={css.title}>{label}</h2>
                     </Link>
                     <ul className={css.list}>
                            {items.map((item) =>
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