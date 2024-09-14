import { useSelector } from "react-redux";

import IconsList from "../../components/IconsList/IconsList.jsx";

import css from "./Features.module.css";

const Features = () => {
  const features = useSelector((state) => state.trucks.currentTrucks);

  return (
    <>
      {features && (
        <div className={css.form}>
          <IconsList {...features} className={css.icons} />
          <h3 className={css.title}>Vehicle details</h3>
          <ul className={css.list}>
            <li className={css.item}>
              <span className={css.name}>Form</span>
              <span className={css.value}>{features.form}</span>
            </li>
            <li className={css.item}>
              <span className={css.name}>Length</span>
              <span className={css.value}>{features.length}</span>
            </li>
            <li className={css.item}>
              <span className={css.name}>Width</span>
              <span className={css.value}>{features.width}</span>
            </li>
            <li className={css.item}>
              <span className={css.name}>Height</span>
              <span className={css.value}>{features.height}</span>
            </li>
            <li className={css.item}>
              <span className={css.name}>Tank</span>
              <span className={css.value}>{features.tank}</span>
            </li>
            <li className={css.item}>
              <span className={css.name}>Consumption</span>
              <span className={css.value}>{features.consumption}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Features;
