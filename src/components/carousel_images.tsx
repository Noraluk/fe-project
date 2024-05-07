"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Carousel({
  images,
  className = "w-full h-full",
}: {
  images: string[];
  className: string;
}) {
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

  return (
    <div
      className={clsx(
        "flex flex-col justify-center gap-y-6 items-center",
        className
      )}
    >
      <div className={clsx("flex gap-x-4 w-full h-full")}>
        <button
          type="button"
          className={clsx(
            "flex items-center justify-center h-full px-4 group",
            {
              "opacity-50": currentImg === 0,
            },
            {
              "cursor-pointer": currentImg > 0 && images.length > 1,
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
                  currentImg > 0 && images.length > 1,
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

        <div className="overflow-hidden relative flex justify-center items-center w-full h-full">
          <div
            ref={carouselRef}
            style={{
              left: -currentImg * carouselSize.width,
            }}
            className="w-full h-full flex transition duration-300 absolute"
          >
            {images.map((image, i) => {
              return (
                <div key={i} className="relative shrink-0 w-full h-full">
                  <Image src={image} alt={""} fill className="" />
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={clsx(
            "z-30 flex items-center justify-center h-full px-4 group",
            {
              "opacity-50": currentImg === images.length - 1,
            },
            {
              "cursor-pointer": currentImg < images.length - 1,
            }
          )}
          data-carousel-next
          onClick={() => {
            setCurrentImg((next) => next + 1);
          }}
          disabled={currentImg === images.length - 1}
        >
          <span
            className={clsx(
              "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30",
              {
                "group-hover:bg-gray-600/50 group-focus:outline-none":
                  currentImg < images.length - 1,
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
      </div>
      <div className="flex gap-x-3">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={clsx("w-5 h-1 bg-white cursor-pointer", {
                "bg-white/30": i !== currentImg,
              })}
              onClick={() => {
                setCurrentImg(i);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
