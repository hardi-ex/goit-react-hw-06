import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const initialContactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  // const [contactsList, setContactsList] = useState(initialContactsList);
  const [contactsList, setContactsList] = useLocalStorage(
    "contacts",
    initialContactsList
  );

  const [searchList, setSearchList] = useState("");

  const filteredList = () => {
    return contactsList.filter((contact) => {
      return contact.name.toLowerCase().includes(searchList.toLowerCase());
    });
  };

  const addContact = (newContact) => {
    setContactsList((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContactsList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchList={searchList} setSearchList={setSearchList} />
      <ContactList
        contactsList={filteredList()}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default App;
