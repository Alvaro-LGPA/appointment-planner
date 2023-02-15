import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [selected, setSelected] = useState(""); // drop-down reset

  const handleTextChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleTextChangeDate = (event) => {
    setDate(event.target.value)
  }

  const handleTextChangeTime = (event) => {
    setTime(event.target.value)
  }

  const handleChangeContact = (event) => {
    setContact(event.target.value);
    setSelected(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (title.length > 0) {
      addAppointment({
        "title": title,
        "date": date,
        "contact": contact,
        "time": time
      });
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
      setSelected("")
    } else {
      return
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleTextChangeTitle={handleTextChangeTitle}
          handleTextChangeDate={handleTextChangeDate}
          handleTextChangeTime={handleTextChangeTime}
          handleChangeContact={handleChangeContact}
          handleSubmit={handleSubmit}
          title={title}
          date={date}
          time={time}
          contact={contact}
          contacts={contacts}
          selected={selected}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
