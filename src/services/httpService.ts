import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false, // Temporarily disabled because server uses Access-Control-Allow-Origin: *
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest", // Helps Django identify AJAX requests
  },
});

// Request interceptor to add CSRF token for Django
app.interceptors.request.use((config) => {
  // Get CSRF token from cookie if available
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];

  if (
    csrfToken &&
    ["post", "put", "patch", "delete"].includes(
      config.method?.toLowerCase() || ""
    )
  ) {
    config.headers["X-CSRFToken"] = csrfToken;
  }

  return config;
});

// Response interceptor for handling token refresh
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    // If response is undefined, it's a network error
    if (!err.response) {
      return Promise.reject(
        new Error("Network Error. Please check your connection.")
      );
    }

    // Handle unauthorized error (token expired)
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        // Call Django token refresh endpoint
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/refresh-token`,
          { withCredentials: true }
        );

        // If successful, retry the original request
        if (data) return app(originalConfig);
      } catch (refreshError) {
        // Handle refresh token failure (e.g., redirect to login)
        console.error("Token refresh failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    // Handle other Django-specific error responses
    const errorMessage =
      err.response.data?.detail ||
      err.response.data?.message ||
      "An error occurred";

    return Promise.reject({
      ...err,
      message: errorMessage,
    });
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
