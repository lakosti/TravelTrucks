import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
