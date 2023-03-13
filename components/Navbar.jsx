import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeMenu = () => {
    setNav(false);
  }

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] ml-3 m-auto flex justify-between items-center text-black-800 py-0">
        <Link href="/" className="logo-link ml-4">
          <h1 className="text-4xl font-extrabold text-yellow-300 tracking-wider uppercase">
            LOGO
          </h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">
              <span className="hover:text-yellow-300 font-extrabold tracking-wider">about</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/resume">
              <span className="hover:text-yellow-300 font-extrabold tracking-wider">classes</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/projects">
              <span className="hover:text-yellow-300 font-extrabold tracking-wider">tutorials</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <span className="hover:text-yellow-300 font-extrabold tracking-wider">contact me</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <span className="hover:text-yellow-300 font-extrabold tracking-wider">events</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-20 ml-4">
          {nav ? (
            <AiOutlineClose size={30} onClick={() => setNav(false)} />
          ) : (
            <AiOutlineMenu size={30} onClick={() => setNav(true)} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-white'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-900">
              <Link href="/" onClick={closeMenu}>
                <span>About</span>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-900">
              <Link href="/resume" onClick={closeMenu}>
                <span>Classes</span>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-900">
              <Link href="/projects" onClick={closeMenu}>
                <span>Tutorials</span>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-900">
              <Link href="/contact" onClick={closeMenu}>
                <span>Events</span>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-900">
              <Link href="/contact" onClick={closeMenu}>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
