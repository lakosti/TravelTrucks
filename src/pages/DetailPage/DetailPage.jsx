import DetailInfo from "../../components/DetailInfo/DetailInfo.jsx";
import Header from "../../components/Header/Header.jsx";

import css from "./DetailPage.module.css";

const ItemPage = () => {
  return (
    <div>
      <Header />
      <div className={css.section}>
        <DetailInfo />
      </div>
    </div>
  );
};

export default ItemPage;
