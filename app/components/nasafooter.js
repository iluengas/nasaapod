import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";


export default function NasaFooter() {
  const nasahome = "https://iluengas.github.io/isaacluengas/";
  const nasamission = "https://www.nasa.gov/about/";
  const joinus = "https://www.nasa.gov/get-involved/";

  return (
    <footer className="bg-black px-9 pt-16 ">
      <div className="w-1/3 ">
        <Image
          alt = "Nasa image"
          src="/nasa.png"
          width={60}
          height={60}
          className="selection:bg-transparent"
        />
      </div>
      <div className="w-full mt-10 flex flex-col border-b border-gray-500 pb-10">
        <h2 className="text-white font-bold text-2xl w-96">
          The National Aeronautics and Space Administration
        </h2>
        <p className="text-gray-400 mt-5 w-96">
          NASA explores the unknown in air and space, innovates for the benefit
          of humanity, and inspires the world through discovery.
        </p>
        <Link
          href={nasamission}
          className="text-white mt-5 w-fit h-fit border border-dashed border-transparent hover:border-b-gray-200 pb-1"
        >
          About NASA&apos;s Mission
        </Link>
        <Link href={joinus} className="text-white font-bold text-lg w-fit mt-5 flex justify-center items-center">
            Join Us
            <FaArrowCircleRight className="ml-2 text-red-500 bg-white rounded-full hover:text-red-700"/>
        </Link>
      </div>
    </footer>
  );
}
