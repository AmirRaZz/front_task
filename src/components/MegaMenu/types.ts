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

export type ChildrenCategory = {
  id: number;
  name: string;
  order: number;
  link: string;
  is_active: boolean;
  level: number;
  children: ChildrenCategory[];
  icon_logo: string;
  product_count: number;
};

export type ApiCategory = {
  id: number;
  name: string;
  order: number;
  link: string;
  is_active: boolean;
  level: number;
  children: ChildrenCategory[];
  icon_logo: string;
  product_count: number;
};
//             "id": 2,
//             "name": "کالای دیجیتالی",
//             "order": 1,
//             "link": "تستسی",
//             "is_active": true,
//             "level": 1,
//             "children": [
//                 {
//                     "id": 3,
//                     "name": "هدفون",
//                     "order": 1,
//                     "link": "تست",
//                     "is_active": true,
//                     "level": 2,
//                     "children": [
//                         {
//                             "id": 13,
//                             "name": "هدفون سیمی",
//                             "order": 1,
//                             "link": "تستی",
//                             "is_active": true,
//                             "level": 3,
//                             "children": [
//                                 {
//                                     "id": 14,
//                                     "name": "تستی",
//                                     "order": 1,
//                                     "link": "تستی",
//                                     "is_active": true,
//                                     "level": 4,
//                                     "children": [],
//                                     "icon_logo": null,
//                                     "product_count": 2
//                                 }
//                             ],
//                             "icon_logo": "https://msh-backend.porgiah.ir/media/shop/category_icons/2024/1730984546213_vgvddy.png",
//                             "product_count": 2
//                         },
//                         {
//                             "id": 4,
//                             "name": "هدفون بی سیم",
//                             "order": 2,
//                             "link": "تست",
//                             "is_active": true,
//                             "level": 3,
//                             "children": [
//                                 {
//                                     "id": 5,
//                                     "name": "هدفون بلوتوثی",
//                                     "order": 1,
//                                     "link": "تست",
//                                     "is_active": true,
//                                     "level": 4,
//                                     "children": [],
//                                     "icon_logo": null,
//                                     "product_count": 0
//                                 }
//                             ],
//                             "icon_logo": "https://msh-backend.porgiah.ir/media/media/category_icons/%D9%87%D8%AF%D9%81%D9%88%D9%86%20%D8%A8%DB%8C%20%D8%B3%DB%8C%D9%85/headphones_17461826.png",
//                             "product_count": 0
//                         }
//                     ],
//                     "icon_logo": "https://msh-backend.porgiah.ir/media/shop/category_icons/2024/color_image_TLP-26313_e05ce0_d02679c4-a0ea-4e26-b68c-133742639b77.png",
//                     "product_count": 2
//                 },
//                 {
//                     "id": 10,
//                     "name": "موبایل",
//                     "order": 2,
//                     "link": "تستی",
//                     "is_active": true,
//                     "level": 2,
//                     "children": [
//                         {
//                             "id": 11,
//                             "name": "test",
//                             "order": 1,
//                             "link": "test",
//                             "is_active": true,
//                             "level": 3,
//                             "children": [
//                                 {
//                                     "id": 12,
//                                     "name": "test4",
//                                     "order": 1,
//                                     "link": "test",
//                                     "is_active": true,
//                                     "level": 4,
//                                     "children": [],
//                                     "icon_logo": null,
//                                     "product_count": 0
//                                 }
//                             ],
//                             "icon_logo": "https://msh-backend.porgiah.ir/media/shop/category_icons/2024/earphone_11705729.png",
//                             "product_count": 0
//                         }
//                     ],
//                     "icon_logo": "https://msh-backend.porgiah.ir/media/shop/category_icons/2024/%DA%A9%D8%A7%D9%84%D8%A7%DB%8C_%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84_s7S19S3.svg",
//                     "product_count": 0
//                 },
//                 {
//                     "id": 24,
//                     "name": "دسته بندی تستی رده دومی",
//                     "order": 3,
//                     "link": "",
//                     "is_active": true,
//                     "level": 2,
//                     "children": [],
//                     "icon_logo": "https://msh-backend.porgiah.ir/media/shop/category_icons/2025/Background-newsletter.jpg",
//                     "product_count": 0
//                 }
//             ],
//             "icon_logo": "https://msh-backend.porgiah.ir/media/shop/category_icons/2025/%D8%B3%D9%88%D9%BE%D8%B1%D9%85%D8%A7%D8%B1%DA%A9%D8%AA_gA0Btr8_qN3HLWP.svg",
//             "product_count": 2
//         },
