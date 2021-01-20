import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import AddContact from './components/AddContact'
import Contacts from './components/Contacts';
import FilterContacts from './components/FilterContacts';


export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const contactsLS = JSON.parse(localStorage.getItem('contacts'));
      contactsLS.length &&
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) })
    }
  }

  componentDidUpdate(_, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  onHandleSubmit = ({ name, number }) => {
    if (!name || !number) {
      alert('All fields should be complited')
      return
    }
    if (this.state.contacts
        .some((item => item.name.toLowerCase() === name.toLowerCase()))) {
        alert('This contact already exsists')
        return
    }

    this.setState((prev) => ({
        contacts: [...prev.contacts, { name, number, id: uuidv4() }],
    }))
  }

  deleteContactById = (id) => {
      this.setState({
      contacts: [...this.state.contacts.filter((item) => item.id !== id)]    
    })
  }
  handleFilter = (value) => {
    this.setState({filter: value })
  }

    filterContact = () => {
      const { filter, contacts } = this.state;
      return contacts.filter((item) => (item.name.toLowerCase().includes(filter.toLowerCase())))
    }
 

  render() {
    return (
    <Div>
        <h2>Phonebook</h2>
        <AddContact onHandleSubmit={this.onHandleSubmit}/>
        <h2>Contacts</h2>
        <FilterContacts handleFilter={this.handleFilter}/>
        <Contacts list={this.filterContact()} deleteContactById={this.deleteContactById}/>
    </Div>
  )
  }
}

const Div = styled.div`
margin: 10px;
padding: 10px;
`;