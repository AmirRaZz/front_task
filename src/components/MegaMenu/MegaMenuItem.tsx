"use client";

import React from "react";
import { SubCategory, MenuItem } from "./types";

type MegaMenuItemProps = {
  category: SubCategory;
};

export const MegaMenuItem: React.FC<MegaMenuItemProps> = ({ category }) => {
  return (
    <div className="flex flex-col pb-2">
      {/* Category title */}
      <div className="mb-3 text-gray-700 text-right">
        <h3 className="font-medium">{category.title}</h3>
      </div>

      {/* List of links */}
      <div className="flex flex-col space-y-3 mb-2">
        {category.items.map((item: MenuItem, index: number) => (
          <a
            key={`${item.id}-${index}`}
            href={item.url || "#"}
            className="text-gray-500 hover:text-[#8cc63f] transition-colors pl-2"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* View all link */}
      <div className="mb-3">
        <a
          href="#"
          className="text-[#8cc63f] flex items-center gap-1 hover:underline"
        >
          <span>مشاهده همه</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-3/4 bg-gray-200"></div>
    </div>
  );
};
