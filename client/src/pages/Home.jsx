import Button from '@/_components/Button'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Home() {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <main className="h-[78vh] lg:mx-10 flex flex-col items-center lg:flex-row gap-10 lg:gap-0" >
      {/* LEFT */}
      <section className="w-[50%] flex items-center justify-center" >
        <div className="px-20 flex flex-col gap-6" >
          <h1 className="text-3xl" >Step into the Classroom of Tomorrow: Interactive 3D Learning Awaits</h1>
          <Button className='w-60 flex-auto rounded-full uppercase'
            onClick={() => {
              if (!userInfo) {
                return navigate("/login");
              }
              navigate("/models")
            }}
          >Get Started</Button>
        </div>
      </section>
      {/* RIGHT */}
      <section className="w-[50%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center" >
        <model-viewer src="http://localhost:5000/file/doll.glb" camera-controls disable-pan shadow-intensity="1" auto-rotate ar ar-modes="scene-viewer webxr quick-look" tone-mapping="neutral" poster="poster.png" disable-zoom></model-viewer>
      </section>
    </main>
  )
}
