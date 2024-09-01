import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
