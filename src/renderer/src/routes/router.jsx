import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
import HomePage from '../pages/HomePage'
import NavLayout from '../layouts/NavLayout'

axios.defaults.baseURL = import.meta.env.VITE_SITE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      {
        path: '/',
        children: [{ path: '/', element: <HomePage /> }]
      }
    ]
  }
])

export default router
