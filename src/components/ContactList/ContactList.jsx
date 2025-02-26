import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
const ContactList = () => {
   const contactsList = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filters.filters.name) || ""; 
  const contacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  




    return (
         <ul  className={s.contactList}>
            {contacts.map(item => (
                <Contact key={item.id} contactItem={item} />
        ))}
      </ul>
   )
   
}

export default ContactList;