import { NavLink, useParams } from "react-router-dom";

import css from "./DetailBar.module.css";

const DetailBar = () => {
  const { id } = useParams();

  return (
    <div className={css.navBar}>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ""}`
        }
        to={`/campers/${id}/features`}
      >
        Features
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ""}`
        }
        to={`/campers/${id}/reviews`}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default DetailBar;
