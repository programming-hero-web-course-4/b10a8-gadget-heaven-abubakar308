import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import GadgetCards from './components/GadgetCards';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: '/category:/category',
            loader: () => fetch('/gadgets.json'),
            element: <GadgetCards />,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/other",
        element: <p className='text-black '>Other</p>
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
