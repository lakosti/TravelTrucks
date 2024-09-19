import { useState } from "react";
import icons from "../../assets/img/icons.svg";
import css from "../FiltersEquipment/Filters.module.css";

const types = ["van", "full", "alcove"];
const names = ["Van", "Fully Integrated", "Alcove"];

const FiltersType = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        {types.map((type, i) => (
          <li
            key={i}
            className={`${css.item} ${activeIndex === i ? css.active : ""}`}
            onClick={() => setActiveIndex(i)}
          >
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
