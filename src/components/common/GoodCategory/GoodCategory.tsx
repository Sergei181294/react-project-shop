import { Link } from "react-router-dom"
import { Cart } from ".."
import css from "./goodCategory.module.css"
import goods from "../../../assets/goods.json"

export const GoodCategory = () => {
       return (
              <div>
                     <Link to="/" className={css.categoriesLink}>
                            <h2 className={css.title}>Книги</h2>
                     </Link>
                     <ul className={css.list}>
                            {goods.map((item) =>
                                   <li key={item.id}>
                                          <Cart
                                                 image={item.imageUrl}
                                                 title={item.title}
                                                 price={item.price}
                                          />
                                   </li>
                            )}
                     </ul>
              </div>
       )
}