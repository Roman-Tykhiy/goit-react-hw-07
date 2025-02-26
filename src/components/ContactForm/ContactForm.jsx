import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
const ContactForm = () => {
    
    const contacts = useSelector((state) => state.contacts.contacts.items);
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        phone: "",
    };
            
    const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
    const phoneValidation = /^\+?\d{9,15}$/;
     const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("поле обов'язкове")
      .min(3, "мінімум 3 символи")
      .max(20, "максимум 20 символів")
      .matches(onlyLaters, "введіть літери!"),
    phone: Yup.string()
      .matches(phoneValidation, "Невірний формат номера телефону")
      .required("поле обов'язкове"),
     });
    const handleSubmit = (values, actions) => {
    
  
    const newConact = {
      name: values.name,
      number: values.phone,
        };   
    dispatch(addContact(newConact));
    actions.resetForm();
  };
    
    return (
        <div className={s.container}>
            <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={applySchema}>
                <Form className={s.form}>
                    <p className={s.text}>Name</p>
                    <Field className={s.field} name="name"
                        placeholder="Введіть ім'я"
                    ></Field>
                    <ErrorMessage
                        className={s.mesege}
                        name="name"
                        component="h6"
                    />
                    <p className={s.text}>Phone number</p>
                    <Field className={s.field}  name="phone"
                    placeholder="Введіть номер телефону"
                    ></Field>
                    <ErrorMessage
                        name="phone"
                        component="h6"
            />
                    <button className={s.addbtn} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>

        
   )
   
}
export default ContactForm;