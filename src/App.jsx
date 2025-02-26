import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SerchBox from "./components/SerchBox/SerchBox";
import { useEffect, useState } from "react";
import s from "./components/App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { ErrorMessage } from "formik";
import Loader from "./components/Loader";

const App = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const noContact = "No contacts. Please add a new contact";
  const error = useSelector((state) => state.contacts.contacts.isError)
  const isLoading = useSelector((state) => state.contacts.contacts.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  if (error) {

    return (<>
      {isLoading && <Loader/>}
      < p className = { s.error } > Щось пішло не так: { error }</ p>
    </>)
      
  }
  return (
    <>
      <div className={s.Form}>
       <h1 className={s.Title}>Phonebook</h1>
      <ContactForm />
        {contactsList.length > 0 && <SerchBox />}
        {isLoading && <Loader/>}
      {contactsList.length === 0 ? (<span className={s.messege}>{noContact}</span>) : <ContactList/>}
      </div>
</>
    
  ) 
};

export default App;
