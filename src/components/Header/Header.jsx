import NavBar from "../NavBar/NavBar.jsx";
import Logo from "../Logo/Logo.jsx";

import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
