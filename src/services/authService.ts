import http from "./httpService";

export const loginApi = async (data: {
  phone_email: string;
  password: string;
}) => {
  return await http
    .post("/login-with-password/", data)
    .then(( data ) => data);
};
