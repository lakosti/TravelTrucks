import { Link } from "react-router-dom";

import icons from "../../assets/img/icons.svg";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={css.logo} to={"/"}>
      <svg width={136} height={16}>
        <use href={`${icons}#logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
