import FormContacts from '../FormContacts/FormContacts';
import { Contain, PhoneBook, PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

export const App = () => {
  return (
    <Contain>
      <PhoneBook>Phonebook</PhoneBook>
      <FormContacts />

      <PhoneContacts>Contacts</PhoneContacts>

      <Filter />
      <ContactList />
    </Contain>
  );
};

export default App;
