import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const DetailPage = lazy(() => import("../../pages/DetailPage/DetailPage.jsx"));
const FavouritePage = lazy(() =>
  import("../../pages/FavouritePage/FavouritePage.jsx")
);
const Features = lazy(() => import("../../components/Features/Features.jsx"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews.jsx"));

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="/campers/:id" element={<DetailPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
