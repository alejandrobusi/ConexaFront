
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import './index.css'
import { routes } from './routes';
import Error404Page from './pages/Error404Page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
    {routes.map(({Element, path}) => (
      <Route key={path} path={path} element={<Element/>}/>
    ))}
    <Route path='*' element={<Error404Page />}/>
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
