import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
