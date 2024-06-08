import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_components/Navbar'
import { Toaster } from "@/components/ui/toaster"


export default function App() {
  return (
    <main>
      <Toaster />
      <Navbar />
      <article className="mx-4 my-20">
        <Outlet />
      </article>
    </main>
  )
}
