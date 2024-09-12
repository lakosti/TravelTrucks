import Location from "../Location/Location.jsx";

import FiltersEquipment from "../FiltersEquipment/FiltersEquipment.jsx";
import FiltersType from "../FiltersType/FiltersType.jsx";

import css from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={css.wrap}>
      <Location />
      <h2 className={css.title}>Filters</h2>
      <FiltersEquipment />
      <FiltersType />
      <button className={css.search}>Search</button>
    </div>
  );
};

export default Filters;
