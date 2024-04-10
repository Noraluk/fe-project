"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  const [mainCarouselSize, setMainCarouselSize] = useState({
    width: 0,
    height: 0,
  });
  const mainCarouselRef = useRef(null);

  useEffect(() => {
    let elem = mainCarouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (mainCarouselRef.current) {
      setMainCarouselSize({
        width,
        height,
      });
    }
  }, []);

  const links = [
    {
      href: "/pokemon/pokedex",
      name: "Pokemon",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/147C0/production/_132740938_indeximage.jpg.webp",
    },
    {
      href: "/pokemon",
      name: "Pokemon",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/147C0/production/_132740938_indeximage.jpg.webp",
    },
  ];
  return (
    <main className="overflow-hidden w-screen h-screen relative flex justify-center items-center">
      <div
        ref={carouselRef}
        style={{
          left: -currentImg * carouselSize.width,
        }}
        className="w-full h-full flex transition-all duration-300 absolute flex-none"
      >
        {links.map((link, index) => {
          return (
            <div key={index} className="relative shrink-0 w-full h-full">
              <Image
                className="pointer-events-none blur-xl opacity-90"
                alt={`carousel-image-${index}`}
                fill
                src={link.image}
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={clsx(
          "z-30 flex items-center justify-center h-full px-4 group",
          {
            "opacity-50": currentImg === 0,
          },
          {
            "cursor-pointer": currentImg > 0 && links.length > 1,
          }
        )}
        data-carousel-prev
        onClick={() => {
          setCurrentImg((prev) => prev - 1);
        }}
        disabled={currentImg === 0}
      >
        <span
          className={clsx(
            "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30",
            {
              "group-hover:bg-gray-600/50 group-focus:outline-none":
                currentImg > 0 && links.length > 1,
            }
          )}
        >
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <div className="w-1/2 h-1/2 rounded-xl border border-red-700 relative overflow-hidden">
        <div
          ref={mainCarouselRef}
          style={{
            left: -currentImg * mainCarouselSize.width,
          }}
          className="flex transition-all duration-300 absolute w-full h-full"
        >
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="relative shrink-0 w-full h-full"
              >
                <Image
                  className="pointer-events-none"
                  alt={`carousel-image-${index}`}
                  fill
                  src={link.image}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <button
        className={clsx(
          "z-30 flex items-center justify-center h-full px-4 group",
          {
            "opacity-50": currentImg === links.length - 1,
          },
          {
            "cursor-pointer": currentImg < links.length - 1,
          }
        )}
        data-carousel-next
        onClick={() => {
          setCurrentImg((next) => next + 1);
        }}
        disabled={currentImg === links.length - 1}
      >
        <span
          className={clsx(
            "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30",
            {
              "group-hover:bg-gray-600/50 group-focus:outline-none":
                currentImg < links.length - 1,
            }
          )}
        >
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </main>
  );
}
