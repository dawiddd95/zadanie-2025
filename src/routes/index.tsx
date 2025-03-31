import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import NotFoundPage from '../pages/NotFound/NotFound'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '*',
    element: <NotFoundPage />, 
  },
]
