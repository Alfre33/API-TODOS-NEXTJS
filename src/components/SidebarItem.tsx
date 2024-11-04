"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Items {
  title: string;
  icon: JSX.Element;
  path: string;
}

export const SidebarItem = ({icon,path,title}: Items) => {
  const pathUrl = usePathname();
  return (
    <>
        <li>
          <Link
            href={path}
            className={`
               px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group 
               hover:bg-gradient-to-r hover:bg-sky-400 hover:text-white
               ${
                 path === pathUrl
                   ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                   : ""
               } 
               `}
          >
            {icon}
            <span className="-mr-1 font-medium">{title}</span>
          </Link>
        </li>
    </>
  );
};
