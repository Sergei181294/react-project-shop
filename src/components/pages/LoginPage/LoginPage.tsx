import css from "./loginPage.module.css"
import { Input, Button } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { Formik } from "formik"
import cancel from "assets/images/RegistrationPage/cancel.svg"
import * as yup from "yup"
import { useAppDispatch } from "hooks/hooks"
import { loginThunk } from "store/auth/slice"

export const LoginPage = () => {

       const validationsShema = yup.object().shape({
              login: yup.string().required("Обязательное поле*"),
              password: yup.string().required("Обязательное поле*")

       })
       const navigate = useNavigate()

       const dispatch = useAppDispatch()
       

       return (
              <div className={css.authPageBody}>
                     <div className={css.authPageContent}>
                            <Link to="/" className={css.authPageClose}>
                                   <img src={cancel} alt="close" />
                            </Link>
                            <h2 className={css.authPageTitle}>OZ.by</h2>
                            <h4 className={css.authPageSubtitle}>Зарегистрируйтесь или войдите</h4>

                            <Formik
                                   initialValues={{
                                          login: "",
                                          password: ""
                                   }}
                                   validateOnBlur={false}
                                   validateOnChange={false}
                                   onSubmit={(values, {resetForm}) => {
                                          dispatch(loginThunk({login:values.login, password:values.password}))
                                          resetForm()
                                          navigate("/")

                                   }}
                                   validationSchema={validationsShema}
                            >

                                   {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
                                          <form onSubmit={handleSubmit}>
                                                 <div className={css.form}>
                                                        <Input
                                                               className={css.inputForLogin}
                                                               type="text"
                                                               name="login"
                                                               onChange={handleChange}
                                                               
                                                               placeholder="Введите логин"
                                                        />
                                                        {errors.login && <p className={css.error}>{errors.login}</p>}
                                                 </div>
                                                 <div className={css.form}>
                                                        <Input
                                                               className={css.inputForPassword}
                                                               type="password"
                                                               name="password"
                                                               onChange={handleChange}
                                                               placeholder="Введите пароль"
                                                        />
                                                        {errors.login && <p className={css.error}>{errors.login}</p>}
                                                 </div>
                                                <Button className={css.authPageBtn} htmlType="submit">Войти</Button>
                                               
                                                 <br />
                                          </form>)}
                            </Formik>





                            <Link to="/registration">
                                   <Button className={css.authPageBtn}>Зарегистрироваться</Button>
                            </Link>


                     </div>
              </div>
       )
}