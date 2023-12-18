import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Dashboard } from "./Dashboard";
import { Admin } from "./Admin";
import { PrivateRoute } from "../Components/PrivateRoute";
import Payments from "./Payments";
import { SacanAndPay } from "./SacanAndPay";
import ScanAndPayForm from "../Components/ScanAndPayForm";
import BankTransfer from "./BankTransfer";
import Merchant from "./Merchant";
import Emergency from "./Emergency";
import AccountDetails from "./AccountDetails";

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
        <Route
          path="/payments"
          element={
            <PrivateRoute>
              <Payments />
            </PrivateRoute>
          }
        />
        <Route path="/payments/scan&pay" element={<SacanAndPay />} />
        <Route path="/payments/scan&pay/pay/:id" element={<ScanAndPayForm />} />
        <Route path="/payments/banktransfer" element={<BankTransfer />} />
        <Route path="/payments/merchant" element={<Merchant />} />
        <Route path="/payments/Emergency" element={<Emergency />} />
        <Route path="/accountDetails" element={<AccountDetails />} />
      </Routes>
    </div>
  );
};
