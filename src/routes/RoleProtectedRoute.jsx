import { Navigate } from "react-router-dom";

import {
  useSelector,
} from "react-redux";

function RoleProtectedRoute({
  allowedRoles,
  children,
}) {
  const user =
    useSelector(
      (state) =>
        state.auth.user
    );

  if (
    !allowedRoles.includes(
      user?.role
    )
  ) {
    return (
      <Navigate
        to="/access-denied"
        replace
      />
    );
  }

  return children;
}

export default RoleProtectedRoute;