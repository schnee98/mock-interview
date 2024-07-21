import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "app/router/router";
import Layout from "app/layout/Layout";
import GlobalStyle from "shared/ui/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
