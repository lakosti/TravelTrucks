import icons from "../../assets/img/icons.svg";

import css from "./Location.module.css";

const Location = () => {
  return (
    <>
      <form className={css.form}>
        <label className={css.label}>
          <span className={css.location}>Location</span>
          <div className={css.position}>
            <input
              type="text"
              placeholder="Kyiv, Ukraine"
              className={css.input}
            />
            <svg width={20} height={20} className={css.icon}>
              <use href={`${icons}#map`} />
            </svg>
          </div>
        </label>
      </form>
    </>
  );
};

export default Location;
