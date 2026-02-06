import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const Layout = () => {
  return (
    <>
     <div className=" sm:flex items-center justify-center font-mono">
       <div className="h-screen   flex flex-col justify-between sm:w-250   border border-dashed">
        <Navbar />
        <main className="justify-center min-h-[calc(100vh-6.25rem)]  ">
          <Outlet />
        </main>
        <Footer />
      </div>
     </div>
    </>
  );
};
