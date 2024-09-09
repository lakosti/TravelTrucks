import icons from "../../assets/img/icons.svg";

import css from "./FiltersEquipment.module.css";

const iconId = ["ac", "automatic", "kitchen", "tv", "bathroom"];
const iconName = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];

const FiltersEquipment = () => {
  return (
    <>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.list}>
        {iconId.map((name, i) => (
          <li key={i} className={css.item}>
            <svg width={32} height={32} className={css.icon}>
              <use href={`${icons}#${name}`} />
            </svg>
            <p>{iconName[i]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FiltersEquipment;
