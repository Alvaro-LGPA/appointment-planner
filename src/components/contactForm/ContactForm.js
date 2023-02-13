import React, { useState, useEffect, useRef } from "react";

export const ContactForm = (props) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isDuplicate, setIsDuplicate] = useState(false);

  let inputStyle = {
    borderColor: "black"
  }
  const firstRender = useRef(true)

  useEffect(()=>{
    if (firstRender.current) { // useEffect has to be skipped on first render, or the component won't render
      firstRender.current = false  // it's no longer the first render
      return // skip the code below
    }
     
    setIsDuplicate((latestValue) => {
      const duplicateCheck = props.contacts.some(contact => contact.name === name);
      console.log(`DuplicateCheck: ${duplicateCheck}`)
      console.log(`Latest value: ${latestValue}`);
      if (duplicateCheck){
        setIsDuplicate(true);
        inputField.style.borderColor ="red";
        document.getElementById("duplicateAlert").style.display="block";
      }else{
        setIsDuplicate(false);
        inputField.style.borderColor = "black"
        document.getElementById("duplicateAlert").style.display="none";
      }})


  }, [name])
  



 

  const handleTextChangeName = (event) => {
    setName(event.target.value);
    checkNameDuplicate();

    
  }

  console.log(`Is duplicate outside: ${isDuplicate}`)
  console.log(name)

  const handleTextChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleTextChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const inputField = document.getElementById("nameInput")

  const checkNameDuplicate = () => {
    const inputField = document.getElementById("nameInput")
    
    // if(isDuplicate){
    //   inputField.style.borderColor ="red";
    // }else{
    //   inputField.style.borderColor = "black"
    // }
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
        <label htmlFor="name">Name</label>
        <input style={inputStyle} type="text" id="nameInput" name="name" value={name} placeholder="Name" onChange={handleTextChangeName}></input>
        <p id="duplicateAlert">The contact already exists.</p>
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
