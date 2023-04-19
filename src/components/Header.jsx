import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav className="container nav">
        <Link to="/" className="logo">
          Budget App
        </Link>
        <Link className="new-btn" to="/add">
          NEW TRANSACTION
        </Link>
      </nav>
    </header>
  );
}

export default Header;
