import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const Layout = () => {
  return (
    <>
      <div className="h-screen   flex flex-col justify-between">
        <Navbar />
        <main className="flex justify-center min-h-[calc(100vh-6.25rem)]  ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
