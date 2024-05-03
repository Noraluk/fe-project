"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuIndex, setMenuIndex] = useState(0);
  const bgs = [
    "bg-black/90",
    "bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0.9),rgba(0,0,0,0.9),rgba(0,0,0,0.8)),url('/coding-bg.jpg')]",
    "bg-black/90",
  ];

  return (
    <div className={`flex flex-col h-screen w-screen ${bgs[menuIndex]}`}>
      <Menu setMenuIndex={setMenuIndex} />
      {children}
    </div>
  );
}

function Menu({
  setMenuIndex,
}: {
  setMenuIndex: Dispatch<SetStateAction<number>>;
}) {
  const path = usePathname();
  const menus = [
    { name: "home", href: "/portforlio" },
    { name: "about", href: "/portforlio/about" },
    { name: "experience", href: "/portforlio/experience" },
    { name: "contact", href: "/portforlio/contact" },
  ];

  return (
    <div className="flex py-6 mx-14 items-center">
      <div
        className="flex justify-between text-white"
        style={{
          width: "500px",
        }}
      >
        {menus.map((menu, i) => {
          return (
            <Link
              key={i}
              className={clsx("uppercase cursor-pointer hover:text-sky-300", {
                "text-sky-300": menu.href == path,
              })}
              href={menu.href}
              onClick={() => {
                setMenuIndex(i);
              }}
            >
              {menu.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
