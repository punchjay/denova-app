import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './Components/App'
import NotFound from './Components/NotFound'

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '', element: <Navigate to="/" replace /> },
    { path: '*', element: <NotFound /> },
  ],
  { basename: '/denova-app' },
)

export default router
