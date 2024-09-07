import { Toaster } from "react-hot-toast";
// import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      {/* <Outlet /> */}
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
