import React, { useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm addContact={props.addContact} contacts={props.contacts}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ul>
          {props.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
        </ul>
      </section>
    </div>
  );
};
