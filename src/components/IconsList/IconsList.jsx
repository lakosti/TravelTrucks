import icons from "../../assets/img/icons.svg";
import css from "./IconsList.module.css";

const IconsList = ({
  AC,
  kitchen,
  TV,
  transmission,
  engine,
  bathroom,
  radio,
  refrigerator,
  microwave,
  water,
  gas,
}) => {
  return (
    <ul className={css.filterList}>
      <li className={css.filterItem}>
        <svg className={css.filterSvg} width={20} height={20}>
          <use href={`${icons}#automatic`} />
        </svg>
        <p className={css.filterName}>
          {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
        </p>
      </li>
      <li className={css.filterItem}>
        <svg className={css.filterSvg} width={20} height={20}>
          <use href={`${icons}#fuel`} />
        </svg>
        <p className={css.filterName}>
          {engine.charAt(0).toUpperCase() + engine.slice(1)}
        </p>
      </li>
      {AC && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#ac`} />
          </svg>
          <p className={css.filterName}>AC</p>
        </li>
      )}
      {kitchen && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#kitchen`} />
          </svg>
          <p className={css.filterName}>Kitchen</p>
        </li>
      )}
      {radio && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#radio`} />
          </svg>
          <p className={css.filterName}>Radio</p>
        </li>
      )}
      {TV && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#tv`} />
          </svg>
          <p className={css.filterName}>TV</p>
        </li>
      )}
      {water && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#water`} />
          </svg>
          <p className={css.filterName}>Water</p>
        </li>
      )}
      {gas && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#gas`} />
          </svg>
          <p className={css.filterName}>Gas</p>
        </li>
      )}
      {microwave && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#microwave`} />
          </svg>
          <p className={css.filterName}>Microwave</p>
        </li>
      )}
      {refrigerator && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#refrigerator`} />
          </svg>
          <p className={css.filterName}>Refrigerator</p>
        </li>
      )}
      {bathroom && (
        <li className={css.filterItem}>
          <svg className={css.filterSvg} width={20} height={20}>
            <use href={`${icons}#bathroom`} />
          </svg>
          <p className={css.filterName}>Bathroom</p>
        </li>
      )}
    </ul>
  );
};

export default IconsList;
