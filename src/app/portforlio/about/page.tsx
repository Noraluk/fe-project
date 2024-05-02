import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-2 text-white h-full">
      <div className="flex flex-col pl-32 pt-20 pb-10 justify-between">
        <p className="text-5xl font-bold border-b-2 border-sky-400 max-w-44 pb-0.5">
          ABOUT
        </p>
        <p className="text-xl">
          Software Developer with over 4 years experience in specializing in
          software development for technological companies. I can implement
          effective frontend and backend features which are requirements of
          customer and project owner. My greatest strength is learning because I
          never stop learning new knowledge that can positive affect to my
          future path. I often face difficult ways to reach project&apos;s goal,
          but I can handle most issues and finish the project.
        </p>
        <br />
        <div className="flex justify-center items-center gap-x-2">
          <hr className="border border-sky-500 w-10" />
          <p className="">NORALUK CHOTIBUTH</p>
          <hr className="border border-sky-500 w-10" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={"/mypic.jpg"}
          alt={""}
          width={400}
          height={800}
          className="rounded-sm shadow-xl shadow-white/50"
        />
      </div>
    </div>
  );
}
