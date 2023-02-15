import React from "react";

export const ContactForm = ({
  handleSubmit,
  handleTextChangeEmail,
  handleTextChangeName,
  handleTextChangePhone,
  currentName,
  currentPhone,
  currentEmail
}) => {


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          placeholder="Name"
          value={currentName}
          onChange={handleTextChangeName}>
        </input>
        <p
          id="duplicateAlert"
          style={{ display: "none" }}>
          The contact already exists.
        </p>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={currentPhone}
          pattern="^\(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$"
          onChange={handleTextChangePhone}>
        </input>
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={currentEmail}
          onChange={handleTextChangeEmail}></input>
        <input type="submit" value="submit" />
      </form>
    </>

  );
};

