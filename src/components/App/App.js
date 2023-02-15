// import React, { useState, useEffect } from 'react';
import FormContacts from '../FormContacts/FormContacts';
import { Contain, PhoneBook, PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';


export const App = () => {
  

  

  

 

  // const normalizedFilter = filter.toLowerCase();

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <Contain>
      <PhoneBook>Phonebook</PhoneBook>
      <FormContacts  />

      <PhoneContacts>Contacts</PhoneContacts>
      
      <Filter />
      <ContactList/> 

      {/* <Filter onChange={handleFilterChange} value={filter} /> 
       <ContactList items={visibleContacts} onDelete={deleteContact} />  */} 
    </Contain>
  );
};

export default App;
