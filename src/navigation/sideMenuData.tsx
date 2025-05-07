import type { MenuItems } from "../config/sideMenuConfig";

interface Props {
  item: MenuItems;
}

const SideMenuData: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Parent item */}
      <div
        className="flex items-center space-x-3 px-4 py-2 hover:bg-white/10 rounded cursor-pointer transition-all"
        title={item.label} // 👈 Tooltip for full label on hover
      >
        <div className="text-xl shrink-0 ">{item.icon}</div>
        <div className="text-sm pl-2 font-medium truncate overflow-hidden whitespace-nowrap w-full">
          {item.label}
        </div>
      </div>

      {/* Children */}
      {item.children && (
        <div className="pl-6">
          {item.children.map((child, idx) => (
            <SideMenuData key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideMenuData;
