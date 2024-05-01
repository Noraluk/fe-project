"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-screen bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0.9),rgba(0,0,0,0.9),rgba(0,0,0,0.8)),url('/coding-bg.jpg')]">
      <Menu />
      {children}
    </div>
  );
}

function Menu() {
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
            >
              {menu.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
