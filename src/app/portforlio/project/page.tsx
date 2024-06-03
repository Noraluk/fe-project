"use client";

import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import Link from "next/link";

type Project = {
  project: {
    name: string;
    href: string;
  };
  type: string;
  language: string;
  status: string;
};

const columnHelper = createColumnHelper<Project>();
const columns = [
  columnHelper.accessor("project", {
    header: () => <p>Name</p>,
    cell: (info) => (
      <div className="flex items-center pl-5 pr-20 w-96">
        <Link
          href={info.getValue().href}
          className="hover:text-sky-400 capitalize"
          aria-disabled={info.getValue().href.length == 0}
        >
          {info.getValue().name}
        </Link>
      </div>
    ),
  }),
  columnHelper.accessor("type", {
    cell: (info) => (
      <div className="flex pl-5 pr-10 items-center">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor("language", {
    cell: (info) => (
      <div className="flex pr-10 items-center pl-5">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor("status", {
    cell: (info) => (
      <div className="flex pr-10 items-center pl-5">{info.getValue()}</div>
    ),
  }),
];

export default function Page() {
  const defaultData: Project[] = [
    {
      project: {
        name: "pokemon",
        href: "/portforlio/project/pokemon/web",
      },
      type: "website",
      language: "nextjs, golang",
      status: "success",
    },
    {
      project: {
        name: "pokemon",
        href: "/portforlio/project/pokemon/mobile",
      },
      type: "mobile",
      language: "flutter",
      status: "success",
    },
    {
      project: {
        name: "chat",
        href: "/portforlio/project/messenger",
      },
      type: "website",
      language: "nextjs, golang",
      status: "in progress",
    },
  ];

  const [data, setData] = useState([...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="pl-32">
      <h4 className="text-white text-xl font-bold max-w-36 border-b-2 border-sky-400">
        PROJECT LIST
      </h4>
      <br />
      <div className="flex w-full h-full items-start text-white">
        <div className="rounded-md border border-white">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup, i) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, i) => (
                    <th
                      key={header.id}
                      className={clsx(
                        "py-2 uppercase border-b-1 border-white",
                        {
                          "border-r-1 border-white":
                            i < headerGroup.headers.length - 1,
                        }
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, j) => (
                <tr
                  key={row.id}
                  className={clsx({
                    "border-b-1 border-white":
                      j < table.getRowModel().rows.length - 1,
                  })}
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <td
                      key={cell.id}
                      className={clsx("py-2", {
                        "border-r-1 border-white":
                          i < row.getVisibleCells().length - 1,
                      })}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
