import { useNavigate } from "react-router-dom";
import "../componentes/CallToAction.css";
import logoBanner from "../images/banner.jpg";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="banner">
      <div className="content">
      <div className="banner-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned<br />
          Mediterranean restaurant, focused<br />
          on traditional recipes served with a<br />
          modern twist.
        </p>
        <button onClick={() => navigate("/bookingPage")}>
          RESERVE A TABLE
        </button>
      </div>
      <div className="banner-image">
        <img src={logoBanner} alt="Little Lemon"/>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;