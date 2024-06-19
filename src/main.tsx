import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,BrowserRouter, RouterProvider } from 'react-router-dom'

import Page from './components/teste.tsx'
import Cadastro from './components/cadastro.tsx'

const router = createBrowserRouter([
  {
    path: "/teste",
    element: <Page />
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
