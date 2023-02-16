import React from "react";

export const ContactPicker = ({contacts, setContact, value}) => {
  
  return (
    <select value={value} onChange={
      //(e) => alert(e.target.value)
      (e) => setContact(e.target.value)
    }
      >
      <option value="" key={-1} selected disabled>Select an Option</option>
      {contacts.map((contact, index) => <option value={contact.name} key={index}>{contact.name}</option>)}
    </select>
    
  );
};
