import categories from "../../../assets/categories.json"
import { useParams, Link } from "react-router-dom"
import { GoodCategory } from "../.."
import css from "./categoryPage.module.css"
import { Breadcrumb } from "antd"

export const CategoryPage = () => {

       const { type } = useParams();

       const category = categories.find((category) => category.type === type)


       return (

              <div className={css.categoryWrapper}>
                     <Breadcrumb className={css.breadcrumb}>
                            <Breadcrumb.Item>
                                   <Link to="/" >Главная страница</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                   {category!.label}
                            </Breadcrumb.Item>
                     </Breadcrumb>
                     <GoodCategory category={category as any} />
              </div>
       )
}