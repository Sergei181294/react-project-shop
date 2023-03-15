import { Link } from "react-router-dom"
import { Input, Button, Radio, Checkbox, RadioChangeEvent, Switch, DatePicker } from "antd"
import css from "./registrationPage.module.css"
import cancel from "assets/images/RegistrationPage/cancel.svg"
import { Formik } from "formik"
import * as yup from "yup"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategoriesFromStore } from "store/categories/selectors"
import { actionsCategories } from "store/categories/slice"


export const RegistrationPage = () => {
       const [value, setValue] = useState(1);

       const onChange = (e: RadioChangeEvent) => {
              setValue(e.target.value);
       };

       const categories = useSelector(getCategoriesFromStore)
       const dispatch = useDispatch()

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack() as any)

       useEffect(() => {
              fetchCategories();
       }, [])

       const validationsShema = yup.object().shape({
              firstName: yup.string().typeError("Должна быть строкой*").required("Обязательное поле*").test('len', 'Должно быть более двух символов*', val => val.toString().length > 2),
              secondName: yup.string().typeError("Должна быть строкой*").test('len', 'Должно быть более двух символов*', (val) => { if (val) return val.toString().length > 2 }),
              email: yup.string().email("Введите валидный email*").required("Обязательное поле*"),
              password: yup.string().required("Обязательное поле*"),
              confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают*').required("Обязательное поле*"),
              checkbox: yup.boolean(),
       })

       return (
              <div className={css.registrationBody}>
                     <div className={css.registrationContent}>
                            <Link to="/" className={css.registrationClose}>
                                   <img src={cancel} alt="close" />
                            </Link>
                            <h2 className={css.registrationTitle}>OZ.by</h2>
                            <h4 className={css.registrationText}>Регистрация</h4>
                            <Formik
                                   initialValues={{
                                          firstName: "",
                                          secondName: "",
                                          email: "",
                                          password: "",
                                          confirmPassword: "",
                                          checkbox: false,

                                   }}
                                   validateOnBlur
                                   onSubmit={(values) => { console.log(values) }}
                                   validationSchema={validationsShema}
                            >
                                   {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                          <div className={css.form}>
                                                 <div className={css.informationBlock}>
                                                        <label htmlFor={`firstName`}>Имя</label>
                                                        <Input
                                                               className={css.inputName}
                                                               type="text"
                                                               name="firstName"
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               value={values.firstName}

                                                        />
                                                        {touched.firstName && errors.firstName && <p className={css.error}>{errors.firstName}</p>}
                                                 </div>

                                                 <div className={css.informationBlock}>
                                                        <label htmlFor={`secondName`}>Фамилия</label>
                                                        <Input
                                                               className={css.inputName}
                                                               type="text"
                                                               name="secondName"
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               value={values.secondName}

                                                        />
                                                        {touched.secondName && errors.secondName && <p className={css.error}>{errors.secondName}</p>}
                                                 </div>

                                                 <div className={css.informationBlock}>
                                                        <label htmlFor={`email`}>Email</label>
                                                        <Input
                                                               className={css.inputName}
                                                               type="text"
                                                               name="email"
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               value={values.email}

                                                        />
                                                        {touched.email && errors.email && <p className={css.error}>{errors.email}</p>}
                                                 </div>

                                                 <div className={css.informationBlock}>
                                                        <label htmlFor={`password`}>Пароль</label>
                                                        <Input
                                                               className={css.inputName}
                                                               type="password"
                                                               name="password"
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               value={values.password}

                                                        />
                                                        {touched.password && errors.password && <p className={css.error}>{errors.password}</p>}
                                                 </div>

                                                 <div className={css.informationBlock}>
                                                        <label htmlFor={`confirmPassword`}>Подтвердите пароль</label>
                                                        <Input
                                                               className={css.inputName}
                                                               type="password"
                                                               name="confirmPassword"
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               value={values.confirmPassword}

                                                        />
                                                        {touched.confirmPassword && errors.confirmPassword && <p className={css.error}>{errors.confirmPassword}</p>}
                                                 </div>


                                                 <div className={css.informationBlock}>
                                                        <span>Выберите пол:</span>
                                                        <Radio.Group onChange={onChange} value={value} className={css.radiogroup}>
                                                               <Radio value={1}>Мужской</Radio>
                                                               <Radio value={2}>Женский</Radio>
                                                        </Radio.Group>
                                                        <br />
                                                 </div>


                                                 <div className={css.informationBlock}>
                                                        <span>Выберите любимые категории</span><br/>
                                                        <div id={css.checkboxBlock}>
                                                               {categories.map(category =>
                                                                      <Checkbox key={category.id} className={css.checkboxCategory}>{category.label}</Checkbox>)}
                                                        </div>
                                                 </div>

                                                 <div className={css.informationBlock}>
                                                        <span>Подписаться на новости OZ.by</span>
                                                        <Switch defaultChecked className={css.switchButton}/>
                                                 </div>

                                                 <div className={css.informationBlock}>
                                                        <span>Выберите дату рождения:</span>
                                                        <DatePicker className={css.datepicker}/>
                                                 </div>



                                                 <div className={css.informationBlock}>
                                                        <Button
                                                               disabled={!isValid && !dirty}
                                                               onClick={handleBlur}
                                                               className={css.registrationBtn}
                                                        >
                                                               Зарегистрироваться
                                                        </Button>
                                                        <Link to="/">
                                                               <Button className={css.cancelBtn}>Отмена</Button>
                                                        </Link>
                                                 </div>

                                          </div>

                                   )}
                            </Formik>
                     </div>
              </div>


       )
}