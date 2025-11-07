import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import PearsonsPage from "./pages/PersonsPage";
import RegisterPage from "./pages/RegisterPage";
import TicketScreen from "./pages/TicketPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "participantes",
        element: <PearsonsPage />,
      },
      {
        path: "registro",
        element: <RegisterPage />,
      },
      {
        path: "gafete/:id",
        element: <TicketScreen />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
