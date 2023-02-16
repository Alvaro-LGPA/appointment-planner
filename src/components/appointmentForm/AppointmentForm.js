import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  selected,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,


}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <ContactPicker
        value={contact}
        contacts={contacts}
        setContact={setContact}
        selected={selected}
      />

      <input
        type="date"
        value={date}
        min={getTodayString()}
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        placeholder="Time"
        onChange={(e) => setTime(e.target.value)}
      />

      <input type="submit"></input>
    </form>

  );
};
