import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
  return (
    <div>
      {/* <ul>
      {props.contacts.map(contact => <Tile contacts={props.contacts}> </Tile>)}
        </ul> */}

      <Tile contacts={props.contacts} />
    </div>
  );
};

