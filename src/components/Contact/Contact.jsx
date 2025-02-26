import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { name, number } = contactItem;

  return (
   <li className={s.ContactItem}>
            <div>
                <p className={s.text}>{name}</p>
                <p>{number}</p>
            </div>
        <button className={s.deletebtn}
          type="button"
          onClick={() => dispatch(deleteContact(contactItem.id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;