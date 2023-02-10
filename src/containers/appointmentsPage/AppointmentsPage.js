import React from "react";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <ul>
          {props.appointments.map( appointment => <li key={appointment.id}>{appointment.title}</li>)}
        </ul>
      </section>
    </div>
  );
};
