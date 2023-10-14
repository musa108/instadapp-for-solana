import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));
const Error = lazy(() => import("./routes/Error"))
const SwapTerminal = lazy(() => import("./pages/swapTerminal"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
  },
  {
    path: "*",
    element:(
      <Suspense>
        <Error/>
      </Suspense>
    ),
  },
  {
    path: "/swapTerminal",
    element:(
      <Suspense>
        <SwapTerminal/>
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
