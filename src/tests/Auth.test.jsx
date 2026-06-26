import {
  describe,
  test,
  expect,
} from "vitest";

import authReducer, {
  login,
  logout,
} from "../store/slices/authSlice";

describe("Auth Slice", () => {
  test("should login user", () => {
    const initialState = {
      user: null,
      isAuthenticated: false,
    };

    const user = {
      name: "Admin",
      email: "admin@egrcp.com",
      role: "Administrator",
    };

    const state = authReducer(
      initialState,
      login(user)
    );

    expect(
      state.user
    ).toEqual(user);

    expect(
      state.isAuthenticated
    ).toBe(true);
  });

  test("should logout user", () => {
    const initialState = {
      user: {
        name: "Admin",
      },
      isAuthenticated: true,
    };

    const state = authReducer(
      initialState,
      logout()
    );

    expect(
      state.user
    ).toBeNull();

    expect(
      state.isAuthenticated
    ).toBe(false);
  });
});