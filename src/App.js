import React from "react";
import { Routes, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

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
            <Route path={ROUTES.CONTACTS}  element={<ContactsPage />} />
              {/* Add props to ContactsPage */}
              
            <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
              {/* Add props to AppointmentsPage */}
        
            </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
