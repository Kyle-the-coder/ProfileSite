import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { landingRoute } from "./pages/LandingPage/LandingPage";
import { projectRoute } from "./pages/ProjectPage/ProjectPage";
import { aboutRoute } from "./pages/AboutMePage/AboutMePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      { path: "/aboutme", ...aboutRoute },
      { path: "/projects", ...projectRoute },

      //   {
      //     path: "/admin",
      //     element: (
      //       <ProtectedRoute>
      //         <AdminMain />
      //       </ProtectedRoute>
      //     ),
      //   },
    ],
  },
]);
