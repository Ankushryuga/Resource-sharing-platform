// header.tsx
import { GoFileDirectory } from "react-icons/go";
import { MdOutlineStarBorder } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxSlash } from "react-icons/rx";
import { AiFillLike } from "react-icons/ai";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

const priorityColorCode=[];

const Header: React.FC = () => (
  <header className="h-14 bg-white px-6 shadow-sm flex items-center justify-between">
    {/* Navigation Path */}
    <nav className="flex items-center space-x-2 text-sm text-gray-800 font-medium">
      {/* Dots and slash */}
      <div className="flex items-center text-gray-500 space-x-1">
        <BiDotsHorizontalRounded className="text-lg" />
        <RxSlash className="text-xs" />
      </div>

      {/* Tasks Folder */}
      <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
        <GoFileDirectory className="text-base" />
        <span>Tasks</span>
      </div>

      <RxSlash className="text-xs text-gray-400" />

      {/* Day-1-Tasks Folder */}
      <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
        <GoFileDirectory className="text-base" />
        <span>Day-1-Tasks</span>
      </div>

      {/* Star Icon */}
      <MdOutlineStarBorder className="text-xl text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-200" />
    </nav>

    {/* Action Icons */}
    <div className="flex items-center space-x-5">
      <IconWrapper>
        <AiFillLike />
      </IconWrapper>
      <IconWrapper>
        <BsFillPlusSquareFill />
      </IconWrapper>
      <IconWrapper>
        <IoSearchSharp />
      </IconWrapper>
    </div>
  </header>
);

// Reusable icon wrapper for consistent style and animation
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-xl text-gray-600 cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-200 ease-in-out">
    {children}
  </span>
);

export default Header;
