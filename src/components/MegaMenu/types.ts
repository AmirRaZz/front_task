import React from "react";

export type MenuItem = {
  id: string;
  title: string;
  url?: string;
};

export type SubCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  subcategories: SubCategory[];
};
