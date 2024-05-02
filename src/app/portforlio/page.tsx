import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { Inconsolata } from "next/font/google";

const font = Inconsolata({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  const contacts = [
    {
      icon: faLinkedinIn,
      href: "https://linkedin.com/in/noraluk-chotibuth",
    },
    { icon: faEnvelope, href: "", tooltip: "noraluk.kn@gmail.com" },
    { icon: faLine, href: "https://line.me/ti/p/fYpu5jIDOw" },
  ];
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col text-white">
        <div className="grow flex flex-col justify-center flex-wrap pl-32">
          <p className="text-6xl">NORALUK</p>
          <div
            style={{
              maxWidth: "430px",
            }}
          >
            <p className="text-7xl font-bold">CHOTIBUTH</p>
            <div className="flex justify-between text-2xl text-blue-300 tracking-wide">
              <p>S O F T W A R E</p>
              <p>D E V E L O P E R</p>
            </div>
          </div>
          <br />
          <button className="border border-white rounded-xl px-2 py-2 w-48 hover:bg-white/20">
            <a href="/noraluk_cv_2023.pdf" download="noraluk_resume">
              RESUME
            </a>
          </button>
        </div>
        <div className="flex h-10 mb-6 pl-28 text-white gap-x-6">
          {contacts.map((contact, i) => {
            return (
              <div key={i}>
                {!!contact.href ? (
                  <Link key={i} target="_blank" href={contact.href}>
                    <FontAwesomeIcon icon={contact.icon} className="w-10" />
                  </Link>
                ) : (
                  <p>
                    <Tooltip content={contact.tooltip}>
                      <FontAwesomeIcon
                        icon={contact.icon}
                        className="w-10 cursor-pointer"
                      />
                    </Tooltip>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`flex flex-col text-6xl justify-center pl-20 pb-20 opacity-50 ${font.className}`}
      >
        <div className="flex">
          <p className="text-[#CECFD0]">me</p>&nbsp;
          <p className="text-[#9FABBA]">=&nbsp;Person()</p>
        </div>
        <div className="flex">
          <p className="text-[#B8ACBE]">while</p>
          <p className="text-[#9FABBA]">(me.awake()):</p>
        </div>
        <p className="text-[#9FABBA]">&nbsp;&nbsp;&nbsp;&nbsp;me.code()</p>
      </div>
    </div>
  );
}
