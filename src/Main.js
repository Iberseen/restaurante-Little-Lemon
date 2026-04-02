import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";

import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Reservations from "./pages/Reservations";

// Inicializar horarios
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
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

  // Reducer (horas disponibles)
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // Estado para reservas
  const [bookings, setBookings] = useState([]);

  // ✅ Cargar reservas guardadas (al iniciar la app)
  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // ✅ Guardar reservas cuando cambian
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // ✅ Enviar formulario (SIN hooks aquí)
  const submitForm = (formData) => {
    const result = submitAPI(formData);

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

        {/* ✅ Página de reservas */}
        <Route
          path="/reservations"
          element={<Reservations bookings={bookings} />}
        />
      </Routes>
    </main>
  );
}

export default Main;