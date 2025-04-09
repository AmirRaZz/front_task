import http from "./httpService";

export const getCategories = async () => {
  return await http.get("/category-list").then(({ data }) => data.data);
};
