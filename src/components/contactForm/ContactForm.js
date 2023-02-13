import React from "react";

export const ContactForm = (props) => {


  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="nameInput" name="name"  placeholder="Name" onChange={props.handleTextChangeName}></input>
        <p id="duplicateAlert" style={{ display: "none" }}>The contact already exists.</p>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="id" name="phone" placeholder="Phone" pattern="^(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$" onChange={props.handleTextChangePhone}></input>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="id" name="email" placeholder="E-Mail" onChange={props.handleTextChangeEmail}></input>
        <input type="submit" value="submit" />
      </form>
    </>

  );
};

