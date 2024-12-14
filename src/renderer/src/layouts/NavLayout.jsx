import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function NavLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-Grey2/30">
      <Navbar />
      <div className="flex-1 p-3">
        <Outlet />
      </div>
    </div>
  )
}
