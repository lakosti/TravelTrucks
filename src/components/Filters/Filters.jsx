import Location from "../Location/Location.jsx";

import css from "./Filters.module.css";
import FiltersEquipment from "../FiltersEquipment/FiltersEquipment.jsx";
import FiltersType from "../FiltersType/FiltersType.jsx";

const Filters = () => {
  return (
    <div className={css.wrap}>
      <Location />
      <h2>Filters</h2>
      <FiltersEquipment />
      <FiltersType />
      <button>Search</button>
    </div>
  );
};

export default Filters;

//  <div>
//    <p className={css.text}>Vehicle equipment</p>
//    <ul className={css.list}>
//      <li className={css.item}>
//        <Icon className={css.svg} id="wind" />
//        <p>AC</p>
//      </li>
//      <li className={css.item}>
//        <Icon className={css.svg} id="diagram" />
//        <p>Automatic</p>
//      </li>
//      <li className={css.item}>
//        <Icon className={css.svg} id="cupHot" />
//        <p>Kitchen</p>
//      </li>
//      <li className={css.item}>
//        <Icon className={css.svg} id="tv" />
//        <p>TV</p>
//      </li>
//      <li className={css.item}>
//        <Icon className={css.svg} id="droplet" />
//        <p>Bathroom</p>
//      </li>
//    </ul>
//  </div>;
