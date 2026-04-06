import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontFamily: "monospace, sans-serif",
          fontWeight: 900,
        }}
      >
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/bookingPage" style={linkStyle}>Book</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: "#495E57",
  textDecoration: "none",
  fontWeight: "500",
};

export default Nav;