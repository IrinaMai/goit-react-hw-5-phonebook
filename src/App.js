import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './components/Contacts'


export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      alert('All fields should be complited')
      return
    }
    if(this.state.contacts
      .some((item => item.name.toLowerCase() === name.toLowerCase()))) {
      alert('No way')
      return
    } 

    this.setState((prev) => ({
      contacts: [...prev.contacts, { name, number, id: uuidv4() }],
      name: '',
      number: ''
    }))
   }

  
  handleChng = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  searchContact() {
    return (this.state.contacts.filter((item) => (item.name.toLowerCase().includes(this.state.filter.toLowerCase())&& item)))
  }
 

  deleteContactById = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((item) => item.id !== id)]    
    })
  }

  render() {
    const { name, number } = this.state;
     return (
       <>
       <h2>Phonebook</h2>
         <form name="phoneBook" onSubmit={this.handleSubmit}>
           <label> Name
           <input name="name" type="text" value={name} onChange={this.handleChng}/>
           </label>
           <label> Number
           <input name="number" type="text" value={number} onChange={this.handleChng} />
            </label>
           <button type="submit" name="submitBtn">Add Contact</button>
         </form>
         <h2>Contacts</h2>
         <p>Find contacts by name</p>
         <input name="filter" type="search" onChange={this.handleChng}/>
         
         <Contacts list={this.searchContact()} deleteContactById={this.deleteContactById}/>
        
       </>
    )
  }
}


