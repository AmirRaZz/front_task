"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu, mockMenuData } from "../MegaMenu";

const Header: React.FC = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleCategoryMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleCategoryMouseLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <header className="container xl:max-w-screen-xl mx-auto">
      {/* Top section */}
      <div className=" px-4 py-3 flex items-center justify-between mb-4">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt="Mehra Shop"
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            </div>
          </Link>
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-gray-600 mr-12">
            <Link href="/" className="hover:text-green-600 transition">
              خانه
            </Link>
            <Link href="/about" className="hover:text-green-600 transition">
              داستان ما
            </Link>
            <Link href="/blog" className="hover:text-green-600 transition">
              بلاگ
            </Link>
            <Link href="/contact" className="hover:text-green-600 transition">
              تماس با ما
            </Link>
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4 ">
          <button className="group flex items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 group-hover:text-green-600 transition"
            >
              <path
                d="M3.01038 16.21C3.01038 20.7 4.81038 22.5 9.30038 22.5H14.6904C19.1804 22.5 20.9804 20.7 20.9804 16.21V11.72"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0004 12.5C13.8304 12.5 15.1804 11.01 15.0004 9.18L14.3404 2.5H9.67037L9.00037 9.18C8.82037 11.01 10.1704 12.5 12.0004 12.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3104 12.5C20.3304 12.5 21.8104 10.86 21.6104 8.85L21.3304 6.1C20.9704 3.5 19.9704 2.5 17.3504 2.5H14.3004L15.0004 9.51C15.1704 11.16 16.6604 12.5 18.3104 12.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.64037 12.5C7.29037 12.5 8.78037 11.16 8.94037 9.51L9.16037 7.3L9.64037 2.5H6.59037C3.97037 2.5 2.97037 3.5 2.61037 6.1L2.34037 8.85C2.14037 10.86 3.62037 12.5 5.64037 12.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0004 17.5C10.3304 17.5 9.50037 18.33 9.50037 20V22.5H14.5004V20C14.5004 18.33 13.6704 17.5 12.0004 17.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mr-2 text-gray-600 group-hover:text-green-600 transition">
              فروشنده شوید
            </span>
          </button>
          <button className="group">
            <Link href="/login">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600 group-hover:text-green-600 transition"
              >
                <path
                  d="M15.68 4.46C16.16 5.17 16.44 6.02 16.44 6.94C16.43 9.34 14.54 11.29 12.16 11.37C12.06 11.36 11.94 11.36 11.83 11.37C9.62 11.3 7.83 9.61 7.59 7.45C7.3 4.88 9.41 2.5 11.99 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.99 15.06C4.57 16.68 4.57 19.32 6.99 20.93C9.74 22.77 14.25 22.77 17 20.93C19.42 19.31 19.42 16.67 17 15.06C14.27 13.23 9.76 13.23 6.99 15.06Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </button>
          <button className="group">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 group-hover:text-green-600 transition"
            >
              <path
                d="M20.59 5.47C21.47 6.46 22 7.76 22 9.19C22 16.19 15.52 20.32 12.62 21.32C12.28 21.44 11.72 21.44 11.38 21.32C8.48 20.32 2 16.19 2 9.19C2 6.1 4.49 3.6 7.56 3.6C9.38 3.6 10.99 4.48 12 5.84C13.01 4.48 14.63 3.6 16.44 3.6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="group relative">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 group-hover:text-green-600 transition"
            >
              <path
                d="M4.75 14.47C4.61 16.1 5.9 17.5 7.54 17.5H18.19C19.63 17.5 20.89 16.32 21 14.89L21.54 7.39001C21.66 5.73001 20.4 4.38 18.73 4.38H5.82001"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 2.5H3.74001C4.82001 2.5 5.67 3.43 5.58 4.5L5.08 10.55"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.25 22.5C16.9404 22.5 17.5 21.9404 17.5 21.25C17.5 20.5596 16.9404 20 16.25 20C15.5596 20 15 20.5596 15 21.25C15 21.9404 15.5596 22.5 16.25 22.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 22.5C8.94036 22.5 9.5 21.9404 9.5 21.25C9.5 20.5596 8.94036 20 8.25 20C7.55964 20 7 20.5596 7 21.25C7 21.9404 7.55964 22.5 8.25 22.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.5H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom section with search and categories */}
      <div className=" flex justify-between items-center">
        <div className="py-2 flex items-center gap-x-8">
          {/* Categories Button */}
          <div
            className="relative"
            onMouseEnter={handleCategoryMouseEnter}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <button className="flex items-center space-x-2 group">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600 group-hover:text-green-600 transition"
              >
                <path
                  d="M3.82007 19.5H21.3201"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.8201 12.5H21.3201"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.82007 12.5H14.3201"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.82007 5.5H21.3201"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-600 group-hover:text-green-600 transition">
                دسته بندی ها
              </span>
            </button>

            {/* Mega Menu */}
            {showMegaMenu && (
              <div
                className="absolute top-full bg-white right-0 z-50 shadow-lg rounded-l-lg w-6xl"
              >
                <MegaMenu categories={mockMenuData} />
              </div>
            )}
          </div>
          <div className="border-r border-gray-400 h-7 mx-2"></div>
          {/* Green Life Button */}
          <button className="hidden md:flex items-center space-x-2 group">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 group-hover:text-green-600 transition"
            >
              <path
                d="M12.8201 9.00006L16.8201 5.00006M12.8201 14.5001L15.8201 11.5001M19.3201 8.00006L17.6951 9.62506M12.8201 19.5001L14.6951 17.6251M20.3201 12.0001L16.5701 15.7501"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12.8201 22C17.2384 22 20.8201 18.3541 20.8201 13.8567C20.8201 9.39453 18.2668 4.18759 14.283 2.32555C13.8187 2.10852 13.3194 2 12.8201 2M12.8201 22C8.40179 22 4.82007 18.3541 4.82007 13.8567C4.82007 12.2707 5.14265 10.5906 5.73738 9M12.8201 22V2M12.8201 2C12.3208 2 11.8215 2.10852 11.3572 2.32555C9.75612 3.07388 8.38613 4.36246 7.32007 5.92583"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-gray-600 group-hover:text-green-600 transition">
              زندگی سبز
            </span>
          </button>
          <div className="border-r border-gray-400 h-7 mx-2"></div>
          {/* Offers Button */}
          <button className="hidden md:flex items-center space-x-2 group">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 group-hover:text-green-600 transition"
            >
              <path
                d="M14.9801 20.01L13.4601 21.53C12.8401 22.15 11.8201 22.15 11.2001 21.53L9.68009 20.01C9.42009 19.75 8.91011 19.54 8.55011 19.54H6.40009C5.52009 19.54 4.80011 18.8199 4.80011 17.9399V15.79C4.80011 15.43 4.59011 14.92 4.33011 14.66L2.81009 13.14C2.19009 12.52 2.19009 11.5 2.81009 10.88L4.33011 9.35999C4.59011 9.09999 4.80011 8.58998 4.80011 8.22998V6.07996C4.80011 5.19996 5.52009 4.47998 6.40009 4.47998"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.66003 3.99002L11.18 2.47C11.8 1.85 12.82 1.85 13.44 2.47L14.9601 3.99002C15.2201 4.25002 15.73 4.46 16.09 4.46H18.2401C19.1201 4.46 19.84 5.18009 19.84 6.06009V8.21C19.84 8.57 20.05 9.08 20.31 9.34L21.83 10.86C22.45 11.48 22.45 12.5 21.83 13.12L20.31 14.64C20.05 14.9 19.84 15.4101 19.84 15.7701V17.9201C19.84 18.8001 19.1201 19.5201 18.2401 19.5201"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.32007 15L15.3201 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.8146 14.5H14.8236"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.81458 9.5H9.82356"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-gray-600 group-hover:text-green-600 transition">
              حراج روز و تخفیف ها
            </span>
          </button>
        </div>
        {/* Search Bar */}
        <div className="relative flex items-center w-80 max-w-md ">
          <input
            type="text"
            placeholder="جستجو"
            className="w-full py-2 px-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-right"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute right-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
