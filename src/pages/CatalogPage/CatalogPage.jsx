import Filters from "../../components/Filters/Filters.jsx";
import Header from "../../components/Header/Header.jsx";
import Items from "../../components/Items/Items.jsx";
import Location from "../../components/Location/Location.jsx";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <section className={css.section}>
        <Location />
        <Filters />
        <Items />
      </section>
    </div>
  );
};

export default CatalogPage;
