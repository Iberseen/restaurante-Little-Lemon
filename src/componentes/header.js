import Nav from "./Nav";
import logo from "../images/logo.png";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: "white",
        color: "#495E57",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={logo}
          style={{ width: "300px", height: "50px", objectFit: "contain" }}
        />
      </div>

      {/* Navigation */}
      <Nav />
    </header>
  );
}

export default Header;