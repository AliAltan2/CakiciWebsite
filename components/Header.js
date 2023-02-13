import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-gray-200 shadow-md p-5 md:px-10
    "
    >
      {/*Left Logo*/}
      <div className="relative flex items-center h-16 cursor-pointer my-auto">
        <Image
          src={"/../public/Logo.PNG"}
          fill={true}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      {/*Middle menu */}
      <div className="flex items-center space-x-12  ">
        <Link href="#MainPage">
          <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Ana Sayfa
          </button>
        </Link>
        <Link href="#MainPage">
          <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Projeler
          </button>
        </Link>

        <Link href="#MainPage">
          <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Kurumsal
          </button>
        </Link>
        <Link href="#MainPage">
          <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            İletişim
          </button>
        </Link>

        {/*This will be a drop down menu, so some  on clikc events have to be implemented */}
      </div>

      {/*Right Menu*/}
      <div className="flex items-center md:border-2 rounded-full py-2">
        <input
          className="pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Aradiginizi buraya yazin"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#8B0000] text-white rounded-full p-2 cursor-pointer" />

        <button class="absolute top-3 right-0 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-1 border border-gray-400 rounded shadow">
          EN
        </button>
        <button class="absolute top-3 right-10 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-1 border border-gray-400 rounded shadow">
          TR
        </button>
        <button class="absolute top-3 right-20 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-1 border border-gray-400 rounded shadow">
          IT
        </button>
      </div>

      {/*Social media icons LATER*/}
    </header>
  );
}

export default Header;
