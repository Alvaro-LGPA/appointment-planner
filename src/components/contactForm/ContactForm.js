import React from "react";

export const ContactForm = ({handleSubmit, handleTextChangeEmail, handleTextChangeName, handleTextChangePhone}) => {


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="nameInput" name="name"  placeholder="Name" onChange={handleTextChangeName}></input>
        <p id="duplicateAlert" style={{ display: "none" }}>The contact already exists.</p>
        <label htmlFor="phone">Phone</label>
        <input type="text"  name="phone" placeholder="Phone" pattern="^\(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$" onChange={handleTextChangePhone}></input>
        <label htmlFor="email">E-Mail</label>
        <input type="email"  name="email" placeholder="E-Mail" onChange={handleTextChangeEmail}></input>
        <input type="submit" value="submit" />
      </form>
    </>

  );
};

