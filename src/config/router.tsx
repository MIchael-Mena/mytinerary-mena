import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../modules/home/pages/Home';
import Cities from '../modules/cities/pages/Cities';
import CityDetail from '../modules/cityDetail/pages/CityDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to="/home" /> },
      { path: '/home', element: <Home /> },
      { path: '/cities', element: <Cities /> },
      { path: '/city-detail/:id', element: <CityDetail /> },
    ],
  },
  { path: '*', element: <h1>404</h1> },
]);

export default router;
