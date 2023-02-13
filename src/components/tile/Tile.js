import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {props.contacts.map(contact => {
        return(
        <>
          <p className="tile-title">{contact.name}</p>
          <p className="tile">{contact.phone}</p>
          <p className="tile">{contact.email}</p>
        </>)
      })}

    </div>
  );
};

//key={contact.id}>{contact.name}