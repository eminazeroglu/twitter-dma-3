import './styles/index.css'
import { createRoot } from 'react-dom/client'
import routes from './router/index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={createBrowserRouter(routes)} />
)
