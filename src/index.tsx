import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Homepage = lazy(() => import("./components/blog/Blog"));
const SignUpPage = lazy(() => import("./components/SignUp"));
const SignInPage = lazy(() => import("./components/LogIn"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));

const rootElement = document.createElement("div");

document.body.appendChild(rootElement);

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);  
