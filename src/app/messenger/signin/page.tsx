"use client";

import { checkHealth } from "@/api/api";
import ConnectionFailedModal from "@/components/connection_failed_modal";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [status, setStatus] = useState(200);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    checkHealth().catch((error) => {
      console.log("error");
      onOpen();
    });
  }, [onOpen]);

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center bg-black">
        <div className="">
          <p className="text-white font-semibold">Enter username</p>
          <input
            type="text"
            className="bg-white rounded-xl h-10 w-48 px-3"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                localStorage.setItem("username", username);
                router.push("/messenger");
              }
            }}
          />
        </div>
      </div>
      <ConnectionFailedModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
