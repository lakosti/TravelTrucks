import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const DetailPage = lazy(() => import("../../pages/DetailPage/DetailPage.jsx"));
const FavouritePage = lazy(() =>
  import("../../pages/FavouritePage/FavouritePage.jsx")
);

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/campers/:id" element={<DetailPage />} />
            <Route path="/favourites" element={<FavouritePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
