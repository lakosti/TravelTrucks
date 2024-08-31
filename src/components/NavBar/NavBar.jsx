import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={css.wrapper}>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ""}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ""}`
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </div>
  );
};

export default NavBar;
