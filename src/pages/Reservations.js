function Reservations({ bookings }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Reservations</h2>

      {bookings.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        bookings.map((b, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Time:</strong> {b.time}</p>
            <p><strong>Guests:</strong> {b.guests}</p>
            <p><strong>Occasion:</strong> {b.occasion}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reservations;