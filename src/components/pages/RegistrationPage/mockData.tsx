import * as yup from "yup"

const validationsShema = yup.object().shape({
       name: yup.string().typeError("Должна быть строкой*").required("Обязательное поле*").test('len', 'Должно быть более двух символов*', val => val.toString().length > 2),
       surname: yup.string().typeError("Должна быть строкой*").test('len', 'Должно быть более двух символов*', (val) => { if (val) return val.toString().length > 2 }),
       email: yup.string().email("Введите валидный email*").required("Обязательное поле*"),
       password: yup.string().required("Обязательное поле*").test('len', 'Должно быть не менее 6 символов*', (val) => { if (val) return val.toString().length >= 6 }),
       confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают*').required("Обязательное поле*").test('len', 'Должно быть не менее 6 символов*', (val) => { if (val) return val.toString().length >= 6 }),
       interests: yup.array().test("minSelected", "Выберите минимум 2 значения*", (value) => {
              return value && value.filter((val) => val).length >= 2;
       }),
       bornAt: yup.date().min(new Date('1930-01-01'), 'Дата не может быть ранее 01-01-1930 года'),
       

})
export const dataRegister: DataRegisterType = {
       fields: [
              { name: 'name', label: 'Имя', type: 'text', css: 'inputName' },
              { name: 'surname', label: 'Фамилия', type: 'text', css: 'inputName' },
              { name: 'email', label: 'Email', type: 'text', css: 'inputName' },
              { name: 'password', label: 'Пароль', type: 'password', css: 'inputName' },
              { name: 'confirmPassword', label: 'Подтвердите пароль', type: 'password', css: 'inputName' },

       ],
       fieldsChecking: [
              { name: 'secretQuestion', label: 'Введите секретный вопрос для восстановления пароля:', type: 'text', css: 'inputName' },
              { name: 'answer', label: 'Ответ на секретный вопрос:', type: 'text', css: 'inputName' },

       ],
       initialValues: {
              name: "",
              surname: "",
              email: "",
              password: "",
              confirmPassword: "",
              secretQuestion: '',
              answer: '',
              interests: [],
              gender: 1,
              isSubscribe: true,
              bornAt: new Date().toJSON().slice(0,10).replace(/-/g,'/'),

       },
       validation: validationsShema,
}

type InitialValuesDataType = {
       name: string,
       surname: string,
       email: string,
       password: string
       confirmPassword: string
       secretQuestion: string
       answer: string
       interests: string[]
       gender: 1 | 2
       isSubscribe: boolean
       bornAt: string
}

type FieldDataType = {
       name: 'name' | 'surname' | 'email' | 'password' | 'confirmPassword' | 'answer' | 'secretQuestion'
       label: string
       type: 'text' | 'email' | "password"
       css: string
}
type DataRegisterType = {
       fields: FieldDataType[]
       fieldsChecking: FieldDataType[]
       initialValues: InitialValuesDataType
       validation: any
}

export const registrationFields = [
       "name",
       "surname",
       "email",
       "password",
       "gender",
       "interests",
       "isSubscribe",
       "bornAt"
]