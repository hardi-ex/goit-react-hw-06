import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contactsList }) => {
  return (
    <ul className={css.ul}>
      {contactsList.map((contact) => {
        return (
          <li className={css.li} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
