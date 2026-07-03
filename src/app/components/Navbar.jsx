"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus, FiX } from "react-icons/fi";
import logo from "../assets/Images/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative px-4 md:px-10 py-4">
      <div className="flex items-center justify-between">

        <Link href="/">
          <Image
            src={logo}
            alt="Aetherfield Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden transition-transform duration-300"
        >
          {menuOpen ? (
            <FiX
              size={32}
              className="rotate-90 transition-transform duration-300"
            />
          ) : (
            <FiPlus
              size={32}
              className="transition-transform duration-300"
            />
          )}
        </button>

        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
          <li>
            <Link
              href="/journal"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Journal
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/career"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Career
            </Link>
          </li>

          <li>
            <button className="font-semibold hover:text-gray-600 transition-colors duration-200">
              Get started →
            </button>
          </li>
        </ul>
      </div>

      <div
        className={`absolute left-0 top-full w-full md:hidden transition-all duration-300 ease-in-out z-50 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/50">
          <ul className="flex flex-col p-6 gap-6 text-lg font-medium">
            <li>
              <Link
                href="/journal"
                onClick={() => setMenuOpen(false)}
                className="block hover:translate-x-2 transition-transform duration-200"
              >
                Journal
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block hover:translate-x-2 transition-transform duration-200"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/career"
                onClick={() => setMenuOpen(false)}
                className="block hover:translate-x-2 transition-transform duration-200"
              >
                Career
              </Link>
            </li>

            <li>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-left hover:translate-x-2 transition-transform duration-200"
              >
                Get started →
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}