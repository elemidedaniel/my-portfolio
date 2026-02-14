import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./components/ProjectsSection";
import Layout from "./layout/Layout.jsx"
import ProjectDetails from "./components/ProjectDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:id", element: <ProjectDetails /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
