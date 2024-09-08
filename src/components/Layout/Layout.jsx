import { Toaster } from "react-hot-toast";
// import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      {/* <Outlet /> */}
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
