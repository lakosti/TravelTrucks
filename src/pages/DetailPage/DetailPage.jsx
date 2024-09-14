import BookForm from "../../components/BookForm/BookForm.jsx";
import DetailInfo from "../../components/DetailInfo/DetailInfo.jsx";
import Header from "../../components/Header/Header.jsx";
import Features from "../../components/Features/Features.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";

import css from "./DetailPage.module.css";

const ItemPage = () => {
  return (
    <>
      <Header />
      <div className={css.section}>
        <DetailInfo />
        <Features />
        {/* <Reviews /> */}
        <BookForm />
      </div>
    </>
  );
};

export default ItemPage;
