import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Dashboard } from "./Dashboard";
import { Admin } from "./Admin";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
