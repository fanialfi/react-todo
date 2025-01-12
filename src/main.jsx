import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css" with {type:'csts'};
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HeaderPage from "./pages/header";
import TaskFormPage from "./pages/taskFormPage";
import CardTask from "./components/fragments/CardTask";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HeaderPage />,
      children: [
        {
          path: "todo",
          element: <TaskFormPage />,
        },
        {
          index: true,
          element: <Navigate to={"/todo"} replace />,
        },
      ],
    },{
      path:"/list",
      element: <CardTask>Mengaji itu lebih baik dari pada main game</CardTask>
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);
