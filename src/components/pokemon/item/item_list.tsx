"use client";

import { fetchItems } from "@/api/pokemons_api";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import Image from "next/image";

export default function ItemList({ page }: { page: number }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["items", page],
    queryFn: async () => {
      const data = await fetchItems(page);
      return data;
    },
  });

  return (
    <div className="bg-gray-400 rounded-xl p-2">
      <table className="w-full">
        <thead className="text-left text-sm font-normal rounded-xl">
          <tr>
            <th scope="col" className="py-5 pl-6 pr-3 w-20 font-bold uppercase">
              ID
            </th>
            <th
              scope="col"
              className="py-5 pl-6 pr-3 w-[500px] font-bold uppercase"
            >
              Item
            </th>
            <th scope="col" className="py-5 pl-6 pr-3 font-bold uppercase">
              Cost
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {isLoading &&
            [...Array(10)].map((e, i) => {
              return (
                <tr key={i} className="w-full">
                  <td colSpan={3} className="whitespace-nowrap h-12 pl-6 pr-3">
                    {i == 4 && (
                      <div className="flex justify-center">
                        <MoonLoader size={35} />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          {!isLoading &&
            data?.data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="w-full border-b last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap h-12 pl-6 pr-3 w-20">
                    <p>{item.id}</p>
                  </td>
                  <td className="flex items-center whitespace-nowrap h-12 pl-6 pr-3 w-[500px]">
                    <Image
                      src={item.sprite_url}
                      alt={item.name}
                      width={0}
                      height={0}
                      className="h-full w-auto"
                    />
                    <p>{item.name}</p>
                  </td>
                  <td className="whitespace-nowrap h-12 pl-6 pr-3">
                    <p>{item.cost}</p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
