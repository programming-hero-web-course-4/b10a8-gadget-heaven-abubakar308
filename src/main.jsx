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
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import ProductDetails from './components/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
          },
        ],
      },
      {
        path: "/details/:product_id",
        element: <ProductDetails />,
        loader: ({ params }) => fetch('../gadgets.json')
        .then(response => response.json())
        .then(data => data.find(item => item.product_id === params.product_id))
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "cart",
            element: <Cart />
          },
          {
            path: "wishlist",
            element: <Wishlist />
          },
        ]
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
