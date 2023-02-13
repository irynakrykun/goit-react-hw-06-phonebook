import React, { useState, useEffect } from 'react';
import FormContacts from '../FormContacts/FormContacts';
import { Contain, PhoneBook, PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(()=>
    JSON.parse(localStorage.getItem('contacts'))?? initialContacts);

  const [filter, setFilter] = useState('');

  // const addContact = values => {
  //   if (contacts.find(contact => contact.name === values.name)) {
  //     return alert(`${values.name} is already in contact`);
  //   }
  //   setContacts(prevContacts => [...prevContacts, values]);
  // };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Contain>
      <PhoneBook>Phonebook</PhoneBook>
      <FormContacts  />

      <PhoneContacts>Contacts</PhoneContacts>
      {/* <Filter />
      <ContactList/> */}

      <Filter onChange={handleFilterChange} value={filter} /> 
       <ContactList items={visibleContacts} onDelete={deleteContact} /> 
    </Contain>
  );
};

export default App;
