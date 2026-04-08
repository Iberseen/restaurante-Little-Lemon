import "../componentes/Footer.css";
import logo from "../images/logo3.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon" />
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>C/ Allen Gatdula</li>
            <li>123 456 789</li>
            <li>Email Us</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h3>Socials</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

      </div>

      <p className="footer-copy">2026 © Little Lemon</p>
    </footer>
  );
}

export default Footer;