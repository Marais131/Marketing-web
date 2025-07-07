import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundDecor from "./BackgroundDecor";

const Layout = () => {
  return (
    <>
      <BackgroundDecor />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
