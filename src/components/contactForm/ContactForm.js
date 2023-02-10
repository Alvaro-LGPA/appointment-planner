import React, { useState, useEffect } from "react";

export const ContactForm = (props) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  let inputStyle = {
    borderColor: "black"
  }

  const handleTextChangeName = (event) => {
    setName(event.target.value);
    
  }

  const handleTextChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleTextChangeEmail = (event) => {
    setEmail(event.target.value)
  }


  
  const checkNameDuplicate = () => {
    const isDuplicate = props.contacts.some(contact => contact.name === name);
    // const myElement = document.getElementById("nameInput");
    // isDuplicate ? myElement.style.borderColor = "red" : myElement.style.borderColor = "black" ;
    isDuplicate ? inputStyle.borderColor = "red" : inputStyle.borderColor = "black"
    
  }
 


  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      email
    }

    const isDuplicate = props.contacts.some(contact => contact.name === name);
    //alert(isDuplicate)

    if (isDuplicate) {
      alert("Contact already exists");
    } else if (name.length > 0) {
      props.addContact(newContact);
      setName("");
      setPhone("");
      setEmail("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input style={inputStyle} type="text" id="nameInput" name="name" value={name} placeholder="Name" onChange={handleTextChangeName} onBlur={checkNameDuplicate()}></input>
        <label for="phone">Phone</label>
        <input type="text" id="id" name="phone" value={phone} placeholder="Phone" onChange={handleTextChangePhone}></input>
        <label for="email">E-Mail</label>
        <input type="text" id="id" name="email" value={email} placeholder="E-Mail" onChange={handleTextChangeEmail}></input>
        <input type="submit" value="submit" />
      </form>
      <h1>Tralari</h1>
    </>

  );
};

//^\(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$
