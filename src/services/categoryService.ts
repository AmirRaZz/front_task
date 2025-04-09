import http from "./httpService";

export const getCategories = async () => {
  return await http.get("/shop/category-list").then(({ data }) => data.data);
};
