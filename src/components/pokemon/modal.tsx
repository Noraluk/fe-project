"use client";

import { XCircleIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export function Modal({
  children,
  setShowModal,
}: Readonly<{
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}>) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white relative">
        {children}
        <button
          className="absolute right-0 top-0 p-2"
          onClick={(e) => {
            setShowModal(false);
          }}
        >
          <XCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
