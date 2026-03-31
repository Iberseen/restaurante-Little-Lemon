import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();
  return (
    <section>
      <h2>Little Lemon</h2>
      <p>El mejor restaurante de Chicago</p>
      <button onClick={() => navigate("/bookingPage")}>
        Reservar mesa
      </button>
    </section>
  );
}

export default CallToAction;