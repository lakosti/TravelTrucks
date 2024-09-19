import { useState } from "react";
import icons from "../../assets/img/icons.svg";

import css from "./Filters.module.css";

const iconId = ["ac", "automatic", "kitchen", "tv", "bathroom"];
const iconName = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];

const FiltersEquipment = () => {
  const [activeItems, setActiveItems] = useState(
    Array(iconId.length).fill(false)
  );

  //знаходимо елемент по індексу і змініємо йому стан
  const toggleColor = (index) => {
    setActiveItems((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.list}>
        {iconId.map((name, i) => (
          <li
            key={i}
            className={`${css.item} ${activeItems[i] ? css.active : ""}`}
            onClick={() => toggleColor(i)}
          >
            <svg width={32} height={32} className={css.icon}>
              <use href={`${icons}#${name}`} />
            </svg>
            <p className={css.name}>{iconName[i]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FiltersEquipment;
