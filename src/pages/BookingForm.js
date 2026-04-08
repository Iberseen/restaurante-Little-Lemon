import { useState } from "react";
import "../componentes/BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid = () => {
    return date && time && guests >= 1 && guests <= 10;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <section className="booking">
      <h2>Reserve a Table</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min="1"
            max="10"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!isFormValid()}
          className="submit-btn"
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;