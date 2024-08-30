import { Link } from "react-router-dom";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logo}>
      <Link to={"/"}>
        Travel<span>Tracks</span>
      </Link>
    </div>
  );
};

export default Logo;
