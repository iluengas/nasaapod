"use client";

import "./NavbarStyles.css";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  // Function to toggle the newsOpen state
  const toggleNewsOpen = () => {
    setNewsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex px-4 lg:px-8 items-center bg-black h-24">
        <div id="dummy" className="w-1/3" />
        <div className="w-1/3 flex items-center justify-center">
          <Image src="/nasa.png" width={60} height={60} />
        </div>
        <ul
          id="nav-links"
          className={menuOpen ? "nav-links" : "nav-links active"}
        >
          <li>
            <button
              className="text-white text-lg font-bold"
              onClick={toggleNewsOpen}
            >
              News & Events
            </button>
          </li>
          <li>
            {" "}
            <a id="live-link" href="https://plus.nasa.gov/">
              <h3 className="text-white text-lg font-bold">NASA+</h3>
              <p className="text-white text-xs font-light border border-red-500 ml-2 rounded-sm px-1 w-fit h-fit py-0 flex items-center">
                LIVE
              </p>
            </a>
          </li>
        </ul>
        <div id="mobile" className="w-1/3 flex justify-end">
          {menuOpen ? (
            <IoMdClose
              id="close-icon"
              className="menu-icon text-white text-4xl"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <IoMdMenu
              id="menu-icon"
              className="menu-icon text-white text-4xl"
              onClick={() => setMenuOpen(true)}
            />
          )}{" "}
        </div>
        <ul
          id="news-links"
          className={
            newsOpen && menuOpen
              ? "news-links active"
              : newsOpen && !menuOpen
              ? "news-links another-active"
              : "news-links"
          }
        >
          <li className="text-2xl font-bold">
            <a
              id="news-and-events"
              href="https://www.nasa.gov/news/"
              className="flex items-center"
            >
              News & Events
              <FaArrowCircleRight className="ml-4 text-red-500 bg-white rounded-full" />
            </a>
          </li>
          <li className="mt-8">
            <a href="https://www.nasa.gov/news/all-news/">All NASA News</a>
          </li>
          <li>
            <a href="https://plus.nasa.gov/series/">Video Series on NASA+</a>
          </li>
          <li>
            <a href="https://www.nasa.gov/podcasts/">Podcasts</a>
          </li>
          <li>
            <a href="https://www.nasa.gov/nasa-blogs/">Blogs</a>
          </li>
          <li>
            <a href="https://www.nasa.gov/newsletters/">Newsletters</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
