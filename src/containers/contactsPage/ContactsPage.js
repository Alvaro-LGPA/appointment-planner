import React, { useState, useEffect, useRef } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEmail] = useState("");

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) { // useEffect has to be skipped on first render, or the component won't render
      firstRender.current = false  // it's no longer the first render
      return // skip the code below
    };
    const duplicateCheck = contacts.some(contact => contact.name === name);
    if (duplicateCheck) {

      document.getElementById("nameInput").style.borderColor = "red";
      document.getElementById("duplicateAlert").style.display = "block";
    } else {
      document.getElementById("nameInput").style.borderColor = "black";
      document.getElementById("duplicateAlert").style.display = "none";
    };
  }, [name, contacts])

    /*
    Add contact info and clear data if the contact name is not a duplicate
    */

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      phone: phone,
      email: eMail
    }

    const isDuplicate = contacts.some(contact => contact.name === name);

    if (isDuplicate) {
      alert("Contact already exists");
    } else if (name.length > 0) { // clear data
      addContact(newContact);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          eMail={eMail}
          setEmail={setEmail} 
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
