import React, { useState, useEffect, useRef } from "react";

export const ContactForm = (props) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) { // useEffect has to be skipped on first render, or the component won't render
      firstRender.current = false  // it's no longer the first render
      return // skip the code below
    };
    const duplicateCheck = props.contacts.some(contact => contact.name === name);
    if (duplicateCheck) {
      
      document.getElementById("nameInput").style.borderColor = "red";
      document.getElementById("duplicateAlert").style.display = "block";
    } else {
      document.getElementById("nameInput").style.borderColor = "black";
      document.getElementById("duplicateAlert").style.display = "none";
    };
  }, [name, props.contacts])

  const handleTextChangeName = (event) => {
    setName(event.target.value);
  }

  const handleTextChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleTextChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      email
    }

    const isDuplicate = props.contacts.some(contact => contact.name === name);

    if (isDuplicate) {
      alert("Contact already exists");
    } else if (name.length > 0) { // clean-up form
      props.addContact(newContact);
      setName("");
      setPhone("");
      setEmail("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="nameInput" name="name" value={name} placeholder="Name" onChange={handleTextChangeName}></input>
        <p id="duplicateAlert" style={{ display: "none" }}>The contact already exists.</p>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="id" name="phone" value={phone} placeholder="Phone" onChange={handleTextChangePhone}></input>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="id" name="email" value={email} placeholder="E-Mail" onChange={handleTextChangeEmail}></input>
        <input type="submit" value="submit" />
      </form>
    </>

  );
};

//^\(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$
