import BookForm from "../../components/BookForm/BookForm.jsx";
import DetailInfo from "../../components/DetailInfo/DetailInfo.jsx";
import Header from "../../components/Header/Header.jsx";

import css from "./DetailPage.module.css";

const ItemPage = () => {
  return (
    <>
      <Header />
      <div className={css.section}>
        <DetailInfo />
        <BookForm />
      </div>
    </>
  );
};

export default ItemPage;
