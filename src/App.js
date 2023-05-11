import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Cart from "./pages/Cart";
import HomePage, { loader as productLoader } from "./pages/HomePage";
import { Suspense } from "react";

import ProductPage, { loader as productDetailLoader } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <HomePage />
          </Suspense>
        ),
        loader: productLoader,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/:productId",
        element: <ProductPage />,
        loader: productDetailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
