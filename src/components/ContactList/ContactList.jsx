import ContactListItem from '../ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, setAppState, deleteContactById }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}>
          <Button
            type="button"
            text="Delete"
            id={contact.id}
            onClick={e => {
              deleteContactById(
                e.target.getAttribute('id'),
                contacts,
                setAppState
              );
            }}
          />
        </ContactListItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  setAppState: PropTypes.func,
  deleteContactById: PropTypes.func,
};

export default ContactsList;