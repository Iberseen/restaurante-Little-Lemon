import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import BookingForm from "./pages/BookingForm";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

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

  // Función para enviar el formulario
  const submitForm = (formData) => {
    const result = submitAPI(formData); // submitAPI viene del script index.html
    if (result) {
      navigate("/confirmedBooking"); // navega a la página de confirmación
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
              submitForm={submitForm} // ✅ pasamos submitForm como prop
            />
          }
        />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;