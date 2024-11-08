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
import ProductDetails from './pages/ProductDetails';
import Brand from './pages/Brand';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout />,
    errorElement: <h3 className='text-center'>page 404</h3> ,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: () => fetch('../gadgets.json')
          },
          {
            path: "/category/:category",
            element: <GadgetCards />,
            loader: () => fetch('../gadgets.json')
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
            path: "/dashboard",
            element: <Cart />
          },
          {
            path: "wishlist",
            element: <Wishlist />
          },
        ]
      },
      
      {
        path: "/brand",
        element: <Brand />,
        loader: () => fetch('../brands.json')
      }
    ]
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
