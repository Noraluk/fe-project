import Carousel from "@/components/carousel_images";
import { Tooltip } from "@nextui-org/react";
import clsx from "clsx";
import { Inconsolata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Inconsolata({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex items-center justify-center">
        <Carousel
          images={[
            "/project/messenger/chat1.png",
            "/project/messenger/chat2.png",
          ]}
          className="w-full h-1/2"
        />
      </div>
      <div
        className={clsx(
          "flex flex-col text-white py-16 rounded-xl border-2 border-white px-10 mx-20 justify-between overflow-hidden",
          font.className
        )}
      >
        <div className="flex gap-x-4">
          <Image src={"/pokeball.png"} alt={""} width={40} height={40} />
          <p className="text-4xl font-bold text-blue-500">Messenger V.0.1</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-sky-300 py-3">
            Project Detail
          </p>
          <p>
            Messenger between sender and receivers and it has notification count
            when someone text something to you.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-sky-300 py-3">Tech Stack</p>
          <div className="flex gap-x-4">
            {[
              { icon: "/technical_skills/nextjs.png", name: "nextjs" },
              { icon: "/technical_skills/golang.png", name: "golang" },
              { icon: "/technical_skills/postgresql.png", name: "postgresql" },
              { icon: "/technical_skills/tailwind.png", name: "tailwind" },
            ].map((stack, i) => {
              return (
                <Tooltip key={i} content={stack.name}>
                  <Image src={stack.icon} alt={""} width={40} height={40} />
                </Tooltip>
              );
            })}
          </div>
        </div>
        <br />
        <br />
        <Link
          href={`${process.env.HOST}/messenger/signin`}
          className="hover:text-sky-300 font-bold self-end"
        >
          {`-> Link`}
        </Link>
      </div>
    </div>
  );
}
