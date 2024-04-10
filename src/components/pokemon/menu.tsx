"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Menu() {
  const path = usePathname();
  console.log(path);
  const menus = [
    { name: "pokedex", href: "/pokemon/pokedex" },
    { name: "item", href: "/pokemon/item" },
  ];

  return (
    <div className="flex w-full justify-between items-center px-32 text-black text-lg font-bold uppercase">
      <Image
        src="/pokemon-logo.png"
        width={100}
        height={100}
        alt="Logo of pokemon"
      />
      <div className="flex gap-20">
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
    </div>
  );
}
