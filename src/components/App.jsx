import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactInput from './ContactInput/ContactInput';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import SearchContact from './SearchContact/SearchContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    this.setState({ contacts: this.loadLocalStorage('CONTACTS') });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      this.saveLocalStorage('CONTACTS', this.state.contacts);
    }
  }

  //Storage

  saveLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error.message);
    }
  }

  loadLocalStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      console.log(error.message);
      return localStorage.getItem(key);
    }
  }

  handlerSearch = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handlerAddContact = (name, number) => {
    const result = this.state.contacts.some(el => el.name === name);
    if (result) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };

  render() {
    return (
      <Form
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h3>Phonebook</h3>
        <ContactInput onContactAdd={this.handlerAddContact} />
        <h3>Contacts</h3>
        <SearchContact
          value={this.state.filter}
          onSearch={this.handlerSearch}
        />
        <ContactList
          onDelete={this.handleDelete}
          contacts={this.filterContacts()}
        />
      </Form>
    );
  }
}
