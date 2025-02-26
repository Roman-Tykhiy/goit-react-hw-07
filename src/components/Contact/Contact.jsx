import { useDispatch } from "react-redux";
import s from "./Contact.module.css"
import { deleteContac } from "../../redux/contactsSlice";
const Contact = ({ contactItem }) => {
  const dispatch = useDispatch();

  const { name, phone } = contactItem;
  
    return (        
      <li className={s.ContactItem}>
            <div>
                <p className={s.text}>{name}</p>
                <p>{phone}</p>
            </div>
        <button className={s.deletebtn}
          type="button"
          onClick={() => dispatch(deleteContac(contactItem.id))}>
        Delete
      </button>
    </li>
            );   

};
export default Contact;