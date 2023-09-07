import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { FaBeer } from "react-icons/fa";
export const MyNavbar = (props) => {
  return (
    <div className="Navbar">
      <nav className="navbar-wrapper">
        <div className="navbar-title">
          <h2>Jaladirishti</h2>
        </div>

        <ul className="navbar-menu">
          <li className="Beranda">
            <Link to="/">Beranda</Link>
          </li>
          <li className="Program">
            <Link to="/program"> Program</Link>
          </li>
          <li className="Berita">
            <Link to="/berita"> Berita</Link>
          </li>
          <li className="Tentang">
            <Link to="tentang"> Tentang</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
