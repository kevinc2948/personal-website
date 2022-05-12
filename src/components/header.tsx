// components/header

import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/contact">Contact</Link>
    </header>
  );
};
export default Header;
