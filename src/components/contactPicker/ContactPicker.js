import React from "react";

export const ContactPicker = ({contacts, handleChangeContact}) => {
  console.log(handleChangeContact)
  
  return (
    <select onChange={handleChangeContact}>
      <option value="" selected disabled>Select an Option</option>
      {contacts.map((contact, index) => <option value={contact.name} key={index}>{contact.name}</option>)}
    </select>
    
  );
};
