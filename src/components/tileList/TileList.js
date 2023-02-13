import React from "react";

export const TileList = (props) => {
  return (
    <div>
      <ul>
          {props.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
        </ul>
    </div>
  );
};
