
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FC } from "react"
import { Link } from "react-router-dom"
import { Card } from ".."
import css from "./goodCategory.module.css"
import { getGoodsFromStore } from "../../store/goods/selectors"
import { actionsGoods } from "../../store/goods/slice"
import { Good } from "../../types"

export interface GoodCategoryProps {
       category: {
              id: string;
              type: string;
              label: string;
       }
}

export const GoodCategory: FC<GoodCategoryProps> = ({ category }) => {

       const goods = useSelector(getGoodsFromStore)
       const dispatch = useDispatch()

       const fetchGoods = () => dispatch(actionsGoods.goodsOnBack() as any)

       useEffect(() => {
              fetchGoods();
              window.scrollTo(0, 0)
       }, [])

       return (
              <div>
                     <Link to={`/categories/${category.type}`} className={css.categoriesLink}>
                            <h2 className={css.title}>{category.label}</h2>
                     </Link>
                     <ul className={css.list}>
                            {goods
                                   // .filter((item) => item.categoryTypeId === category.type)
                                   .map((item) =>
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