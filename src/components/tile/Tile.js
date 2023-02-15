import React from "react";

export const Tile = ({objectData}) => {

  const arrayToMap = Object.values(objectData);

  return (

    <div className="tile-container">

      {arrayToMap.map((value, index) => {
        if (index === 0) {
          return <p key={index} className="tile-title">{value}</p>;
        } else {
          return <p key={index} className="tile">{value}</p>
        }
      })}
    </div>
  )
};
