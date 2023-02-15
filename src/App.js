import React, { useState } from "react";

import { Routes, Route, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{
    name: "Perico",
    phone: 234,
    email: "perico@google.com",
    id: 124

  },
  {
    name: "Tralari",
    phone: 234,
    email: "tralari@google.com",
    id: 125
  }
  ]);

  const [appointments, setAppointments] = useState([{
    title: "appointment 1",
    contact: "get contact from contacts",
    date: "1-03-22",
    time: "13:00h",
    id:345
  },
  {
    title: "appointment 2",
    contact: "get contact from contacts",
    date: "24-11-23",
    time: "15:00h",
    id: 634
  }
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (newContact)=>{
    setContacts((prev) => [...prev, newContact])

  }

  const addAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment])
  }


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route exact path="/">
            <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact}/>} />
            {/* Add props to ContactsPage */}

            <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>} />
            {/* Add props to AppointmentsPage */}

          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
