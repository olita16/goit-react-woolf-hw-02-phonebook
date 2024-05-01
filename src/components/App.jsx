import css from './App.module.css';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import NoContactsMessage from './Message/Message';
import Filter from '../components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Anie Copeland', number: '459-12-56' },
      { id: 'id-2', name: 'Rosie Sipson', number: '443-89-12' },
      { id: 'id-3', name: 'Hermione Cline', number: '645-17-79' },
      { id: 'id-4', name: 'Eden Clements', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
  if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  alert(`${name} is already in contacts`);
  return;
}

    this.setState(({ contacts }) => ({
      contacts: [
        {
          id: (Math.random() * 1000).toFixed(32),
          name,
          number,
        },
        ...contacts,
      ],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;

    return (
      <div className={css.container}>
        <h1 className={css.headText}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.headText}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length === 0 ? (
          <p className={css.messageNotAdd}>
            Your phonebook is empty. Add new contact
          </p>
        ) : visibleContacts.length === 0 ? (
          <NoContactsMessage name={filter} />
        ) : (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
