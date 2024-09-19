import Filters from "../../components/Filters/Filters.jsx";
import Header from "../../components/Header/Header.jsx";
import Items from "../../components/Items/Items.jsx";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <section className={css.container}>
        <Filters />
        <Items />
      </section>
    </>
  );
};

export default CatalogPage;
