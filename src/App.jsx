import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SerchBox from "./components/SerchBox/SerchBox";
import { useEffect, useState } from "react";
import s from "./components/App.module.css"
import { useSelector } from "react-redux";

const App = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const noContact = "No contacts. Please add a new contact";
  return (
    <>
      <div className={s.Form}>
       <h1 className={s.Title}>Phonebook</h1>
      <ContactForm />
      {contactsList.length > 0 && <SerchBox/>}
      {contactsList.length === 0 ? (<span className={s.messege}>{noContact}</span>) : <ContactList/>}
      </div>
      
    
    </>
  ) 
};

export default App;
