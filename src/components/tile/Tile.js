import React from "react";

export const Tile = ({ objectData }) => {

  const arrayToMap = Object.values(objectData);

  return (

    <div className="tile-container">

      {arrayToMap.map((value, index) =>  (<p key={index} className={index === 0 ? "tile-title" : "tile"}>{value}</p>))}
    </div>
  )
};
