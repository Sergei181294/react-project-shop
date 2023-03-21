import { Link } from "react-router-dom"
import { Input, Button, Radio, Switch, DatePicker } from "antd"
import css from "./registrationPage.module.css"
import cancel from "assets/images/RegistrationPage/cancel.svg"
import { Formik, Field } from "formik"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "hooks/hooks"
import { getCategoriesFromStore } from "store/categories/selectors"
import { actionsCategories } from "store/categories/slice"
import dayjs from 'dayjs';
import { dataRegister } from './mockData'

export const RegistrationPage = () => {

       const categories = useSelector(getCategoriesFromStore)
       const dispatch = useAppDispatch()

       useEffect(() => {
              dispatch(actionsCategories.categoriesOnBack());
       }, [])

       return (
              <div className={css.registrationBody}>
                     <div className={css.registrationContent}>
                            <Link to="/" className={css.registrationClose}>
                                   <img src={cancel} alt="close" />
                            </Link>
                            <h2 className={css.registrationTitle}>OZ.by</h2>
                            <h4 className={css.registrationText}>Регистрация</h4>
                            <Formik
                                   initialValues={dataRegister.initialValues}
                                   validateOnBlur={false}
                                   validateOnChange={false}

                                   onSubmit={(values, { resetForm }) => {
                                          console.log(values);
                                          resetForm()

                                   }}
                                   validationSchema={dataRegister.validation}
                            >

                                   {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
                                          <form onSubmit={handleSubmit}>
                                                 <div className={css.form}>

                                                        {dataRegister.fields.map((field) => <div key={field.name} className={css.informationBlock}>
                                                               {field.label && <label htmlFor={field.name}>{field.label}</label>}
                                                               <Input
                                                                      className={css[field.css]}
                                                                      type={field.type}
                                                                      name={field.name}
                                                                      onChange={handleChange}
                                                                      value={values[field.name]}
                                                               />
                                                               {errors[field.name] && <p className={css.error}>{errors[field.name]}</p>}
                                                        </div>)}
                                                        <div className={css.informationBlock}>
                                                               <span>Выберите пол:</span>
                                                               <Radio.Group name="gender" onChange={handleChange} value={values.gender} className={css.radiogroup}>
                                                                      <Radio value={1}>Мужской</Radio>
                                                                      <Radio value={2}>Женский</Radio>
                                                               </Radio.Group>
                                                               <br />
                                                        </div>

                                                        <div className={css.informationBlock}>
                                                               <span>Выберите любимые категории</span><br />
                                                               <div id={css.checkboxBlock}>
                                                                      <>
                                                                             {categories.map(category =>
                                                                                    <label key={category.id}>
                                                                                           <Field
                                                                                                  type="checkbox"
                                                                                                  name="categories"
                                                                                                  value={category.label}
                                                                                                  onChange={handleChange}
                                                                                           />
                                                                                           <span className={css.checkboxLabel}>{category.label}</span>
                                                                                    </label>
                                                                             )}
                                                                      </>
                                                               </div>
                                                               {errors.categories && <p className={css.error}>{errors.categories}</p>}
                                                        </div>

                                                        <div className={css.informationBlock}>
                                                               <span>Подписаться на новости OZ.by</span>
                                                               <Switch checked={values.sendNotification} className={css.switchButton} onChange={(value) => setFieldValue('sendNotification', value)} />
                                                        </div>

                                                        <div className={css.informationBlock}>
                                                               <span>Выберите дату рождения:</span>
                                                               <DatePicker
                                                                      className={css.datepicker}
                                                                      name="birthDate"
                                                                      value={dayjs(values.birthDate)}
                                                                      clearIcon={false}
                                                                      onChange={(date, dateString) => setFieldValue("birthDate", new Date(dateString))}
                                                               />
                                                               {errors.birthDate && <p className={css.error}>{errors.birthDate}</p>}
                                                        </div>


                                                        {dataRegister.fieldsChecking.map((field) => <div key={field.name}>
                                                               {field.name === "answer" ? values.secretQuestion &&
                                                                      <div className={css.informationBlock}>
                                                                             {field.label && <label htmlFor={field.name}>{field.label}</label>}
                                                                             <Input
                                                                                    className={css[field.css]}
                                                                                    type={field.type}
                                                                                    name={field.name}
                                                                                    onChange={handleChange}
                                                                                    value={values[field.name]}

                                                                             />
                                                                             {errors[field.name] && <p className={css.error}>{errors[field.name]}</p>}
                                                                      </div>
                                                                      :
                                                                      <div className={css.informationBlock}>
                                                                             {field.label && <label htmlFor={field.name}>{field.label}</label>}
                                                                             <Input
                                                                                    className={css[field.css]}
                                                                                    type={field.type}
                                                                                    name={field.name}
                                                                                    onChange={handleChange}
                                                                                    value={values[field.name]}

                                                                             />
                                                                             {errors[field.name] && <p className={css.error}>{errors[field.name]}</p>}
                                                                      </div>
                                                               }
                                                        </div>)}


                                                        <div className={css.informationBlock}>
                                                               <Button
                                                                      className={css.registrationBtn}
                                                                      htmlType="submit"

                                                               >
                                                                      Зарегистрироваться
                                                               </Button>
                                                               <Link to="/">
                                                                      <Button className={css.cancelBtn}>Отмена</Button>
                                                               </Link>
                                                        </div>

                                                 </div>
                                          </form>
                                   )}
                            </Formik>
                     </div>
              </div>
       )
}