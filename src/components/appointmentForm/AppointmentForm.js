import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  handleChangeContact,
  handleTextChangeTitle,
  handleTextChangeDate,
  handleTextChangeTime,
  
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Title" onChange={handleTextChangeTitle}></input>

      <ContactPicker contacts={contacts} handleChangeContact={handleChangeContact}/>

      <input type="date" value={date} min={getTodayString()} placeholder="Date" onChange={handleTextChangeDate}></input>
    
      <input type="time" value={time} placeholder="Time" onChange={handleTextChangeTime}></input>
      <input type="submit"></input>
    </form>

  );
};
