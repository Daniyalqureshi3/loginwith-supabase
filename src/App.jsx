import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Desktop from "./pages/Desktop"
import Fetch from "./pages/Fetch"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/desktop",
    element: <Desktop />
  },
  {
    path: "/fetch",
    element: <Fetch />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
