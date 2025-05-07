import { motion } from "framer-motion";
import SideMenuData from "../navigation/sideMenuData";
import config from "../config/sideMenuConfig";

const SideMenu: React.FC = () => {
  // Extract fixed top and bottom items
  const topItem = config[0];
  const bottomItem = config[config.length - 1];
  const middleItems = config.slice(1, config.length - 1);
  const createNewButton = config[1].label;
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, rotateY: -10 }}
      animate={{ x: 0, opacity: 1, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="flex flex-col h-full"
    >
      {/* Top Fixed */}
      <div className="pt-2 pb-2 pr-4 pl-4 border-b border-white/20">
        <SideMenuData item={topItem} />
      </div>

      {/* Scrollable Middle */}
      <div className="flex-1 overflow-y-auto space-y-1 p-4 hide-scrollbar bg-transparent">
        {middleItems.map((item, idx) => (
          <div
            key={idx}
            className={item.label === createNewButton ? "bg-white/10 rounded" : ""}
          >
            <SideMenuData item={item} />
          </div>
        ))}
      </div>

      {/* Bottom Fixed */}
      <div className="pt-2 pb-2 pr-4 pl-4 border-t border-white/20">
        <SideMenuData item={bottomItem} />
      </div>
    </motion.div>
  );
};

export default SideMenu;
