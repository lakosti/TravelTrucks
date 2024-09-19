import { Outlet } from "react-router-dom";

import BookForm from "../../components/BookForm/BookForm.jsx";
import DetailInfo from "../../components/DetailInfo/DetailInfo.jsx";
import Header from "../../components/Header/Header.jsx";
import DetailBar from "../../components/DetailBar/DetailBar.jsx";

import css from "./DetailPage.module.css";

const ItemPage = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <DetailInfo />
        <DetailBar />
        <div className={css.navBar}>
          <Outlet />
          <BookForm />
        </div>
      </div>
    </>
  );
};

export default ItemPage;
