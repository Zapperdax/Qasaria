import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function ProtectedRoutes() {
  const user = useSelector((state) => state.users.user);
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <>
          {toast("You Must Login First", {
            icon: "⚠️",
            style: {
              borderRadius: "10px",
              background: "#031B34",
              color: "#fff",
            },
          })}
          <Navigate to="/" />
        </>
      )}
    </>
  );
}

export default ProtectedRoutes;
