"use client";

import React, { useState, useEffect } from "react";
import { MegaMenuItem } from "./MegaMenuItem";
import { ChildrenCategory, ApiCategory } from "./types";
import Image from "next/image";
type MegaMenuProps = {
  categories: ApiCategory[];
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Set the first category as active by default when component mounts
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0].id.toString());
    }
  }, [categories]);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleMenuLeave = () => {
    // Don't reset to null on leave to keep a category always selected
    if (categories.length > 0) {
      setActiveCategory(categories[0].id.toString());
    }
  };

  // Function to render icon based on icon_logo data
  const renderIcon = (iconLogo: string | null) => {
    if (!iconLogo) return null;

    // Check if the iconLogo is a URL (starts with http or https)
    if (
      typeof iconLogo === "string" &&
      (iconLogo.startsWith("http://") || iconLogo.startsWith("https://"))
    ) {
      return (
        <div className="w-6 h-6 relative overflow-hidden">
          <Image
            src={iconLogo}
            alt="category icon"
            className="w-full h-full object-contain"
            width={24}
            height={24}
          />
        </div>
      );
    }
    // If it's not a URL, render it as is (might be a React component passed as string)
    return <span>{iconLogo}</span>;
  };

  return (
    <div className="flex relative" onMouseLeave={handleMenuLeave}>
      {/* Main menu column - right side */}
      <div className="w-65 pr-6 py-6 h-fit">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`cursor-pointer ${
              activeCategory === category.id.toString()
                ? "hover:bg-gray-100"
                : ""
            }`}
            onMouseEnter={() => handleCategoryHover(category.id.toString())}
          >
            <div
              className={`flex py-3 px-2 rounded-md items-center transition-colors mb-2 duration-200 text-gray-600 gap-2 relative `}
            >
              {category.icon_logo && renderIcon(category.icon_logo)}
              <span className="">{category.name}</span>
              {activeCategory === category.id.toString() && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[60%] w-1 bg-[#8cc63f]"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mega menu content area */}
      {activeCategory && (
        <div className="flex-1 flex bg-gray-50 p-5 rounded-l-lg">
          {/* Menu grid - middle */}
          <div className="flex p-4 w-full space-x-6">
            {categories
              .find((cat) => cat.id.toString() === activeCategory)
              ?.children.map((subcat: ChildrenCategory, index: number) => (
                <React.Fragment key={`${subcat.id}-${index}`}>
                  <div className="flex-1 min-w-0">
                    <MegaMenuItem category={subcat} />
                  </div>
                  {/* Add divider after first and second columns */}
                  {index < 2 && (
                    <div className="w-[1px] bg-gray-200 self-stretch my-6"></div>
                  )}
                </React.Fragment>
              ))}
          </div>
          {/* Green sidebar - left side */}
          <div className="w-45 bg-[#8cc63f] rounded-lg"></div>
        </div>
      )}
    </div>
  );
};
