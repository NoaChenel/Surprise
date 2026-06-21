import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Attente from "@pages/Attente";
import Accueil from "@pages/Accueil";
import ComingSoon from "@pages/ComingSoon";

import "@styles/colors.css";
import "@styles/styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Attente />
  },
  {
    path: "/Love",
    element: <Accueil />
  },
  {
    path: "/Mots",
    element: <ComingSoon />
  },
  {
    path: "/Date",
    element: <ComingSoon />
  },
  {
    path: "/Jeux",
    element: <ComingSoon />
  },

], {
  basename: "/Surprise",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
