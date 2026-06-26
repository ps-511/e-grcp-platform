import apiClient from "./apiClient";

export const getPosts =
  async () => {
    const response =
      await apiClient.get(
        "/posts"
      );

    return response.data;
  };

export const getUsers =
  async () => {
    const response =
      await apiClient.get(
        "/users"
      );

    return response.data;
  };