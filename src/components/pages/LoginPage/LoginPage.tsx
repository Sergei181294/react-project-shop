import css from "./loginPage.module.css"
import { Input, Button } from "antd"
import { Link } from "react-router-dom"
import cancel from "../../../assets/images/RegistrationPage/cancel.svg"

export const LoginPage = () => {
       return (
              <div className={css.authPageBody}>
                     <div className={css.authPageContent}>
                            <Link to="/" className={css.authPageClose}>
                                   <img src={cancel} alt="close" />
                            </Link>
                            <h2 className={css.authPageTitle}>OZ.by</h2>
                            <h4 className={css.authPageSubtitle}>Зарегистрируйтесь или войдите</h4>
                            <Input />
                            <Input />
                            <Button className={css.authPageBtn}>Войти</Button><br />
                            <Link to="/registration">
                                   <Button className={css.authPageBtn}>Зарегистрироваться</Button>
                            </Link>


                     </div>
              </div>
       )
}