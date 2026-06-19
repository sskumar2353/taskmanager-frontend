import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "../styles/layout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="layout">

        <Sidebar />

        <main>
          {children}
        </main>

      </div>
    </>
  );
};

export default MainLayout;