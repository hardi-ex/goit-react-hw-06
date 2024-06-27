import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

export const Contact = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <>
      <div className={css.mainDiv}>
        <div className={css.div}>
          <p className={css.text}>
            <IoPersonSharp className={css.icon} />
            {name}
          </p>
          <p className={css.text}>
            <FaPhone className={css.icon} />
            {number}
          </p>
        </div>
        <button
          className={css.btn}
          type="button"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Contact;
