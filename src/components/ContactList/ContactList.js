import Contact from 'components/Contact/Contact';
import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';
import { List, ListItem } from './ContactList.styled';


const ContactList = () => {
  const items = useSelector(getContacts)
  

  return (
    <List>
      {items.map((item, id) => (
        <ListItem key={id}>
          <Contact contact={item}  />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
