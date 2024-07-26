import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import MainLayout from "./pages/MainLayout";
import CartPage from "./pages/CartPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <p>Page not found</p>,
      children: [
        {
          index: true,
          element: <Navigate to={"products"} replace />,
        },
        {
          path: "products",
          element: <HomePage />,
        },
        {
          path: "/products/:id",
          element: <SingleProductPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
