import css from '../ContactListItem/ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, children }) => {
  return (
    <li className={css.listItem}>
      {contact.name} : {contact.number} {children}
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  children: PropTypes.element,
};

export default ContactListItem;