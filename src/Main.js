import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";

import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Reservations from "./pages/Reservations";
import Login from "./pages/Login";

// Inicializar horarios
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // tu función de disponibilidad
};

// Reducer
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) setBookings(JSON.parse(savedBookings));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const submitForm = (formData) => {
    const result = submitAPI(formData); // simula API

    if (result) {
      setBookings((prev) => [...prev, formData]);
      navigate("/confirmedBooking");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/bookingPage"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida */}
        <Route
          path="/reservations"
          element={
            localStorage.getItem("auth") ? (
              <Reservations bookings={bookings} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </main>
  );
}

export default Main;