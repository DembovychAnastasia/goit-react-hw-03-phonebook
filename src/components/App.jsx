import { GlobalStyle } from "./GlobalStyle";
import { Section } from "./Section/Section";

import { Component } from 'react';
import { Container } from "./Container";
import {ContactForm} from "./FormContact/FormContact";
import { ContactList } from "./ContactList/ContacttList";
import { Filter } from "./FilterContact/FilterContact";


// export const App = () => {
//   return (
//     <div>
//       <GlobalStyle/>
//       React homework template
//     </div>
//   );
// };

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

  addContact = newContact => {
    this.state.contacts.find(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim() 
    )
      ? alert(`${newContact.name}: is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
          
        });

        
  };

  
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


render () {
  return (
    
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        // color: '#010101'
      }}
    >
      <GlobalStyle/>
      <Section title="Phonebook">  
      <ContactForm onAddContact={this.addContact} />
      </Section>
      <Section title="Contacts">   
      {/* <p> Hello</p> */}
      <Filter value={this.filter} onChange={this.changeFilter}/>
      <ContactList
           contacts={this.getFilteredContacts()}
            onDelete={this.deleteContact}
          />
        </Section> 
     
    </Container>
  );
};
};
