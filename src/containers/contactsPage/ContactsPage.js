import React, { useState, useEffect, useRef } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");


  const firstRender = useRef(true)


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (firstRender.current) { // useEffect has to be skipped on first render, or the component won't render
      firstRender.current = false  // it's no longer the first render
      return // skip the code below
    };
    const duplicateCheck = props.contacts.some(contact => contact.name === currentName);
    if (duplicateCheck) {
      
      document.getElementById("nameInput").style.borderColor = "red";
      document.getElementById("duplicateAlert").style.display = "block";
    } else {
      document.getElementById("nameInput").style.borderColor = "black";
      document.getElementById("duplicateAlert").style.display = "none";
    };
  }, [currentName, props.contacts])

  const handleTextChangeName = (event) => {
    setCurrentName(event.target.value);
  }

  const handleTextChangePhone = (event) => {
    setCurrentPhone(event.target.value)
  }

  const handleTextChangeEmail = (event) => {
    setCurrentEmail(event.target.value)
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const newContact = {
      name: currentName,
      phone: currentPhone,
      email: currentEmail
    }

    const isDuplicate = props.contacts.some(contact => contact.name === currentName);

    if (isDuplicate) {
      alert("Contact already exists");
    } else if (currentName.length > 0) { // clear data
      props.addContact(newContact);
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
    }

  };

  

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm addContact={props.addContact} contacts={props.contacts} handleSubmit={handleSubmit} handleTextChangeName={handleTextChangeName} handleTextChangePhone={handleTextChangePhone} handleTextChangeEmail={handleTextChangeEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
