import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

const App = () => {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectNameFilter) || "";

  const filteredList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchList={filter} />
      <ContactList contactsList={filteredList} />
    </>
  );
};

export default App;
