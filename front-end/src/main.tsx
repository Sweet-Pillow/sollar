import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Error from './pages/ErrorPage/Index'
import Layout from './components/Layout/Index';
import Home from './pages/CadastroUsuarioPage/Index'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "*",
              element: <Home />
          }
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
