import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

export default function Page() {
  const skills = [
    {
      iconPath: "/technical_skills/golang.png",
      name: "Golang",
    },
    {
      iconPath: "/technical_skills/nodejs.png",
      name: "NodeJS",
    },
    {
      iconPath: "/technical_skills/nestjs.png",
      name: "NestJS",
    },
    {
      iconPath: "/technical_skills/python.png",
      name: "Python",
    },
    {
      iconPath: "/technical_skills/react.png",
      name: "React",
    },
    {
      iconPath: "/technical_skills/flutter.png",
      name: "Flutter",
    },
    {
      iconPath: "/technical_skills/javascript.png",
      name: "Javascript",
    },
    {
      iconPath: "/technical_skills/typescript.png",
      name: "Typescript",
    },
    {
      iconPath: "/technical_skills/mysql.png",
      name: "MySQL",
    },
    {
      iconPath: "/technical_skills/postgresql.png",
      name: "PostgreSQL",
    },
    {
      iconPath: "/technical_skills/oracle.png",
      name: "Oracle",
    },
    {
      iconPath: "/technical_skills/mongodb.png",
      name: "MongoDB",
    },
    {
      iconPath: "/technical_skills/redis.png",
      name: "Redis",
    },
    {
      iconPath: "/technical_skills/docker.png",
      name: "Docker",
    },
    {
      iconPath: "/technical_skills/swagger.png",
      name: "Swagger",
    },
    {
      iconPath: "/technical_skills/kafka.png",
      name: "Kafka",
    },
  ];

  return (
    <div className="grid grid-cols-3 text-white px-20 h-full">
      <div className="flex flex-col pr-10 pt-10 justify-between">
        <div>
          <h1 className="border-b border-blue-400 max-w-48 text-xl font-medium">
            TECHNICAL SKILLS
          </h1>
          <br />
          <div className="grid grid-cols-2 gap-y-4">
            {skills.map((skill, i) => {
              return (
                <div key={i} className="flex gap-x-3 items-center">
                  <Image src={skill.iconPath} alt={""} width={40} height={40} />
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="border-b border-blue-400 max-w-32 text-xl font-medium">
            LANGUAGES
          </h1>
          <br />
          <div>
            <ul className="list-disc pl-10 flex flex-col gap-y-2">
              <li>Thai</li>
              <li>English ( IELTS : 6.5 )</li>
            </ul>
          </div>
        </div>
        <br />
      </div>
      <div className="flex flex-col gap-y-16 pt-10">
        <div>
          <h1 className="border-b border-blue-400 max-w-32 text-xl font-medium">
            EDUCATION
          </h1>
          <br />
          <p className="font-semibold">Bachelor of Engineering Technology</p>
          <p className="text-white/50">Thai-Nichi Institute of Technology</p>
        </div>
        <div>
          <h1 className="border-b border-blue-400 max-w-32 text-xl font-medium">
            EXPERIENCE
          </h1>
          <br />
          <div className="flex flex-col">
            <Company
              year={"2018"}
              name={"Lightnet (Thailand) Co.,Ltd"}
              position={"Backend Developer"}
              icons={[
                { path: "/technical_skills/golang.png", name: "golang" },
                { path: "/technical_skills/nodejs.png", name: "nodejs" },
                {
                  path: "/technical_skills/solidity.png",
                  name: "solidity",
                },
                {
                  path: "/technical_skills/postgresql.png",
                  name: "postgresql",
                },
              ]}
            />
            <ExperienceVerticalLine />
            <Company
              year={"2020"}
              name={"Siam Cement Group"}
              position={"Fullstack Developer"}
              icons={[
                { path: "/technical_skills/python.png", name: "python" },
                { path: "/technical_skills/flutter.png", name: "flutter" },
              ]}
            />
            <ExperienceVerticalLine />
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col">
                <div className="rounded-full w-16 h-16 bg-sky-500 flex justify-center items-center font-bold">
                  2022
                </div>
                <ExperienceVerticalLine />
                <div className="rounded-full w-16 h-16 bg-sky-500 flex justify-center items-center font-bold">
                  2024
                </div>
              </div>
              <div>
                <p className="font-semibold">
                  KASIKORN Business-Technology Group
                </p>
                <p className="text-white/50">Golang Developer</p>
                <div className="flex gap-x-4 gap-y-1">
                  {[
                    { path: "/technical_skills/golang.png", name: "golang" },
                    { path: "/technical_skills/mongodb.png", name: "mongodb" },
                    { path: "/technical_skills/oracle.png", name: "oracle" },
                    { path: "/technical_skills/kafka.png", name: "kafka" },
                  ].map((icon, i) => {
                    return (
                      <Tooltip key={i} content={icon.name}>
                        <Image
                          src={icon.path}
                          alt={""}
                          width={35}
                          height={30}
                        />
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="flex flex-col gap-y-16 pt-10">
        <div>
          <h1 className="border-b border-blue-400 max-w-36 text-xl font-medium">
            EXPERIENCE II
          </h1>
          {[
            {
              icon: "/technical_skills/nestjs.png",
              title: "Finance & Backoffice management",
              duration: "6 months in 2021",
            },
            {
              icon: "/technical_skills/golang.png",
              title: "Authorization in marketplace",
              duration: "2 months in 2023",
            },
            {
              icon: "/technical_skills/flutter.png",
              title: "Information page",
              duration: "1 week in 2024",
            },
          ].map((v, i) => {
            return (
              <div key={i}>
                <br />
                <div className="flex gap-x-4">
                  <Image src={v.icon} alt={""} width={50} height={50} />
                  <div className="flex flex-col">
                    <div>
                      <p className="font-semibold">{v.title}</p>
                      <p className="text-white/50">{v.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="border-b border-blue-400 max-w-48 text-xl font-medium">
            PERSONAL SKILLS
          </h1>
          <br />
          <div className="grid grid-cols-2 pl-12 pr-14 gap-y-4">
            {["Team Work", "Time Management", "Honesty", "Problem Solving"].map(
              (skill, i) => {
                return (
                  <div key={i} className="flex items-center gap-x-2">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <p className="text-white font-medium">{skill}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div>
          <h1 className="border-b border-blue-400 max-w-24 text-xl font-medium">
            HOBBIES
          </h1>
          <br />
          <div className="flex gap-x-6 pl-10">
            {[
              { icon: "/controller.png", tip: "playing games" },
              { icon: "/clapperboard.png", tip: "watching clips" },
              { icon: "/book.png", tip: "reading books" },
              { icon: "/food.png", tip: "eating food" },
            ].map((icon, i) => {
              return (
                <div
                  key={i}
                  className="rounded-full h-14 w-14 border-2 border-white flex justify-center items-center"
                >
                  <Tooltip content={icon.tip}>
                    <Image src={icon.icon} alt={""} width={30} height={30} />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Company({
  year,
  name,
  position,
  icons,
}: {
  year: string;
  name: string;
  position: string;
  icons: { path: string; name: string }[];
}) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="rounded-full w-16 h-16 bg-sky-500 flex justify-center items-center font-bold">
        {year}
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-white/50">{position}</p>
        <div className="flex gap-x-4 gap-y-1">
          {icons.map((icon, i) => {
            return (
              <Tooltip key={i} content={icon.name}>
                <Image src={icon.path} alt={""} width={35} height={30} />
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExperienceVerticalLine() {
  return (
    <div className="flex w-16 justify-center">
      <div className="h-6 w-0.5 bg-white"></div>
    </div>
  );
}
