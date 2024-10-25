import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { landingRoute } from "./pages/LandingPage/LandingPage";
import { projectRoute } from "./pages/ProjectPage/ProjectPage";
import { aboutRoute } from "./pages/AboutMePage/AboutMePage";
import { servicesRoute } from "./pages/ServicesPage/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      { path: "/aboutme", ...aboutRoute },
      { path: "/projects", ...projectRoute },
      { path: "/services", ...servicesRoute },

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
