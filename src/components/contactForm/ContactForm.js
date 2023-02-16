import React from "react";

export const ContactForm = ({
  handleSubmit,
  eMail,
  setEmail,
  name,
  setName,
  phone,
  setPhone
}) => {


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input
            type="text"
            name="name"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </label>
        <p
          id="duplicateAlert"
          style={{ display: "none" }}>
          The contact already exists.
        </p>
        <label>Phone
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={phone}
            pattern="^\(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>E-Mail
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={eMail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>

  );
};

