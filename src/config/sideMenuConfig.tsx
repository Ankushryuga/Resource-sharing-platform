// config/sideMenuConfig.tsx
import type { ReactElement } from "react";
import { FaDashcube, FaPlus, FaInbox, FaTimes, FaUsers } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { PiNotebookFill } from "react-icons/pi";
import { GoFileSubmodule } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";

export interface MenuItems {
  label: string;
  path: string;
  icon: ReactElement;
  children?: MenuItems[];
}

const Name: string = "Ankush";

const config: MenuItems[] = [
  {
    label: Name,
    path: `/${Name.toLowerCase()}`,
    icon: <FaDashcube className="text-2xl" />,
  },
  {
    label: "Create New",
    path: "/createNewSideMenu",
    icon: (
      <FaPlus className="text-purple-800 text-base bg-white p-1 rounded-full border border-purple-800 shadow transition" />
    ),
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: <FaInbox className="text-2xl" />,
  },
  {
    label: "Recents",
    path: "/recents",
    icon: <GiBackwardTime className="text-2xl" />,
  },
  {
    label: "Favourites",
    path: "/favourites",
    icon: <FcBookmark className="text-2xl" />,
    children: [
      {
        label: "Tasks",
        path: "/mytasks",
        icon: <PiNotebookFill className="text-2xl" />,
      },
    ],
  },
  {
    label: "My Files",
    path: "/myFiles",
    icon: <GoFileSubmodule className="text-2xl" />,
    children: [
      {
        label: "Course-Name-Value-Field-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
      {
        label: "Course-1",
        path: "/course1",
        icon: <PiNotebookFill className="text-2xl" />,
      },
    ],
  },
  { label: "Users", path: "/users", icon: <FaUsers className="text-2xl" /> },
  {
    label: "Logout",
    path: "/logout",
    icon: <IoMdLogOut className="text-2xl" />,
  },
];

export default config;
