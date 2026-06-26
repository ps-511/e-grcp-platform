import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type":
      "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log(
      "Request Sent:",
      config.url
    );

    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(
      "Request Error:",
      error
    );

    return Promise.reject(
      error
    );
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(
      "Response Received:",
      response.status
    );

    return response;
  },
  (error) => {
    if (
      error.response
    ) {
      switch (
        error.response.status
      ) {
        case 401:
          alert(
            "Unauthorized Access"
          );
          break;

        case 403:
          alert(
            "Access Denied"
          );
          break;

        case 404:
          alert(
            "Resource Not Found"
          );
          break;

        case 500:
          alert(
            "Server Error"
          );
          break;

        default:
          alert(
            "Something went wrong"
          );
      }
    } else if (
      error.code ===
      "ECONNABORTED"
    ) {
      alert(
        "Request Timeout"
      );
    } else {
      alert(
        "Network Error"
      );
    }

    return Promise.reject(
      error
    );
  }
);

export default apiClient;