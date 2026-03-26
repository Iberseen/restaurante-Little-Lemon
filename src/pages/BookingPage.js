function BookingPage() {
  return (
    <section>
      <h1>Reservar mesa</h1>

      <form>
        <label>Fecha:</label>
        <input type="date" />

        <label>Hora:</label>
        <input type="time" />

        <label>Personas:</label>
        <input type="number" min="1" max="10" />

        <button type="submit">Reservar</button>
      </form>
    </section>
  );
}

export default BookingPage;