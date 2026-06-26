import { describe, test, expect } from "vitest";
import MockAdapter from "axios-mock-adapter";

import apiClient from "../services/apiClient";
import {
  getPosts,
  getUsers,
} from "../services/requestService";

const mock = new MockAdapter(apiClient);

describe("Request Service", () => {
  test("should fetch posts", async () => {
    mock.onGet("/posts").reply(200, [
      {
        id: 1,
        title: "Test Post",
      },
    ]);

    const data = await getPosts();

    expect(data.length).toBe(1);
    expect(data[0].title).toBe("Test Post");
  });

  test("should fetch users", async () => {
    mock.onGet("/users").reply(200, [
      {
        id: 1,
        name: "Admin",
      },
    ]);

    const data = await getUsers();

    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Admin");
  });
});