import { Link, useLocation } from "react-router-dom";
import auxLogo from "../assets/aux-logo.png";

export default function Header() {
  const location = useLocation(); // Get current route

  // Check which page user is on
  const isAboutPage = location.pathname === "/about";
  const isEventPage = location.pathname === "/event";
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";

  // Change Header background&text styles based on page
  const headerBackground =
    isAboutPage || isEventPage || isContactPage
      ? "#1e88b6"
      : "linear-gradient(to right, transparent 50%, #1e88b6 50%)";
  const workshopTextColor = isHomePage ? "text-black" : "text-white";
  const navTextColor = isHomePage ? "text-white" : "text-white";

  return (
    <header
      className={`top-0 flex items-center z-50 h-20 transition-colors duration-300`}
      style={{ background: headerBackground }}
    >
      <div className="mx-6 flex items-center justify-between w-full px-0">
        <div className="flex items-center">
          <img src={auxLogo} alt="Accelerate UX Logo" className="w-10 mx-0" />
          <p className={`text-2xl mx-3 ${workshopTextColor}`}>
            Accelerate UX Workshop
          </p>
        </div>

        <nav className="flex items-center ml-auto">
          <Link to="/" className={`mx-3 ${navTextColor}`}>
            Home
          </Link>
          <Link to="/about" className={`mx-3 ${navTextColor}`}>
            About
          </Link>
          <Link to="/event" className={`mx-3 ${navTextColor}`}>
            Events
          </Link>
          <Link to="/contact" className={`mx-3 ${navTextColor}`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
