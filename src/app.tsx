// import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./interface/pages/auth";
import Accounts from "./interface/pages/accounts";
import Transactions from "./interface/pages/transactions";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/accounts",
      element: <Accounts />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
