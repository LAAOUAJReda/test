import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light px-4">
        <Link to="/">LOGO</Link>
      </nav>
    </header>
  );
};
export default Header;
