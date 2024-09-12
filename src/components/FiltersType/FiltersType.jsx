import icons from "../../assets/img/icons.svg";

import css from "../FiltersEquipment/Filters.module.css";

const types = ["van", "full", "alcove"];
const names = ["Van", "Fully Integrated", "Alcove"];

const FiltersType = () => {
  return (
    <>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        {types.map((type, i) => (
          <li className={css.item} key={i}>
            <svg className={css.icon} width={32} height={32}>
              <use href={`${icons}#${type}`} />
            </svg>
            <p className={css.name}>{names[i]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FiltersType;
