"use client";

import React, { useState, useEffect } from "react";
import { MegaMenuItem } from "./MegaMenuItem";
import { MenuCategory, SubCategory } from "./types";

type MegaMenuProps = {
  categories: MenuCategory[];
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Set the first category as active by default when component mounts
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  }, [categories]);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleMenuLeave = () => {
    // Don't reset to null on leave to keep a category always selected
    if (categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  };

  return (
    <div className="flex relative" onMouseLeave={handleMenuLeave}>
      {/* Main menu column - right side */}
      <div className="w-65 pr-6 py-6 h-fit">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`cursor-pointer ${
              activeCategory === category.id ? "hover:bg-gray-100" : ""
            }`}
            onMouseEnter={() => handleCategoryHover(category.id)}
          >
            <div
              className={`flex py-3 px-2 rounded-md items-center transition-colors mb-2 duration-200 text-gray-600 gap-2 relative `}
            >
              {category.icon && <span>{category.icon}</span>}
              <span className="">{category.title}</span>
              {activeCategory === category.id && (
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
              .find((cat) => cat.id === activeCategory)
              ?.subcategories.map((subcat: SubCategory, index: number) => (
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
