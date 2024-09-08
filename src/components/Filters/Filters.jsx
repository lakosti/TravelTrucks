import icons from "../../assets/img/icons.svg";
import Location from "../Location/Location.jsx";

import css from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={css.wrap}>
      <Location />
      <h2>Filters</h2>
      <p>Vehicle equipment</p>
      <div>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#ac`} />
          </svg>
        </button>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#automatic`} />
          </svg>
        </button>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#kitchen`} />
          </svg>
        </button>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#tv`} />
          </svg>
        </button>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#bathroom`} />
          </svg>
        </button>
      </div>
      <p>Vehicle type</p>
      <div>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#van`} />
          </svg>
        </button>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#full`} />
          </svg>
        </button>
        <button>
          <svg width={32} height={32}>
            <use href={`${icons}#alcove`} />
          </svg>
        </button>
      </div>
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
