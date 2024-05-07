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
            "/project/pokemon/mobile/list.png",
            "/project/pokemon/mobile/filter.png",
            "/project/pokemon/mobile/about.png",
            "/project/pokemon/mobile/base_stats.png",
            "/project/pokemon/mobile/evolution.png",
            "/project/pokemon/mobile/moves.png",
          ]}
          className="w-4/6 h-[700px]"
        />
      </div>
      <div
        className={clsx(
          "flex flex-col text-white py-16 rounded-xl border-2 border-white px-10 mx-20 justify-between",
          font.className
        )}
      >
        <div className="flex gap-x-4">
          <Image src={"/pokeball.png"} alt={""} width={40} height={40} />
          <p className="text-4xl font-bold text-blue-500">Pokemon</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-sky-300 py-3">
            Project Detail
          </p>
          <p>
            This application displays all pokemons and user can filter to scope
            specific pokemons and user can see pokemon details such as about,
            base stats which contain a power progress bar animation, evolution
            and moves
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-sky-300 py-3">Tech Stack</p>
          <div className="flex gap-x-4">
            {[{ icon: "/technical_skills/flutter.png", name: "flutter" }].map(
              (stack, i) => {
                return (
                  <Tooltip key={i} content={stack.name}>
                    <Image src={stack.icon} alt={""} width={40} height={40} />
                  </Tooltip>
                );
              }
            )}
          </div>
        </div>
        <br />
        <br />
        <Link
          href={"https://github.com/Noraluk/flutter_app"}
          className="hover:text-sky-300 font-bold  self-end"
          target="_blank"
        >
          <div className="flex gap-x-2 items-center">
            <Image src={"/github.png"} alt={""} width={30} height={30} />
            <p>Source code</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
