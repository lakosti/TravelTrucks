import { Link } from "react-router-dom";

import css from "./Logo.module.css";

import icons from "../../assets/img/icons.svg";

const Logo = () => {
  return (
    <Link className={css.logo} to={"/"}>
      <svg width={164} height={16}>
        <use href={`${icons}#logo`} />
      </svg>
      {/* Travel<span>Tracks</span> */}
    </Link>
  );
};

export default Logo;
