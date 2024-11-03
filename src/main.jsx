import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainpage from './pages/Mainpage';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainpage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/statistics",
        element: <h2>Stasistics</h2>
      },
      {
        path: "/dashboard",
        element: <h2>Dashboard</h2>
      },
      {
        path: "/other",
        element: <h2>Other</h2>
      }
    ]
  },
  {
    path: '*',
    element: <h2>Not Found</h2>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
