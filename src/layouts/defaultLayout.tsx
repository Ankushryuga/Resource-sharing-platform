import Header from "./header";
import SideMenu from "./sidemenu";
import AppContent from "./appContent";

const DefaultLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className="w-60 text-white items-center"
        style={{ backgroundColor: "#0b1b36" }} // ✅ correct single #!
      >
        <SideMenu />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1 bg-white overflow-y-auto">
        <Header />
        <AppContent />
      </div>
    </div>
  );
};

export default DefaultLayout;
