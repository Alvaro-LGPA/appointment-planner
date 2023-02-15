import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({ tiles }) => {
  
  return( 
  <div>
    {tiles.map((element, index) =>  <Tile key={index} objectData={element} />)}
    </div>)
    }
