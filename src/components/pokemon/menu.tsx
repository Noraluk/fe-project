"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const path = usePathname();
  console.log(path);
  const menus = [
    { name: "pokedex", href: "/pokemon/pokedex" },
    { name: "item", href: "/pokemon/item" },
  ];

  return (
    <div className="flex w-full justify-end gap-20 pr-40 pt-5 text-black text-lg font-bold uppercase">
      {menus.map((menu) => {
        return (
          <Link
            key={menu.name}
            href={menu.href}
            className={clsx("hover:text-red-500", {
              "text-red-500": path === menu.href,
            })}
          >
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
