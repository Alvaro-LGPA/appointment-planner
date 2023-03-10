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
    } else {
      return
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          contacts={contacts}
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
