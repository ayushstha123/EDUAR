import React from 'react';
import Button from '@/_components/Button';
import { Separator } from "@/components/ui/separator"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, LogOut, User } from 'lucide-react';
import { useSignoutMutation } from '@/slices/api/api.auth';
import { clearCredentials } from '@/slices/authSlice';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Models", href: "/models" },
  { label: "Playground", href: "/playground" },
]

function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [signout, { data, isLoading, error }] = useSignoutMutation();
  const dispatch = useDispatch();
  const navigateLogout = (e) => {
    e.preventDefault();
    console.log("login")
    navigate("/login")
  }
  const navigateSignup = (e) => {
    e.preventDefault();
    console.log("signup")
    navigate("/signup")
  }

  const handleLogout = async () => {
    try {
      await signout().unwrap();
      dispatch(clearCredentials());
      navigate("/")
    } catch (err) {
      console.log(err ? err : err.message);

    }
  }

  return (
    <nav className="fixed z-[1000] top-0 h-16 w-full p-4 bg-white/60 backdrop-blur-md shadow-sm flex items-center justify-center">
      <main className="container mx-auto flex justify-between items-center">
        <section className="flex items-center gap-4">

          {/* logo */}
          <div className="font-bold text-xl">Edu</div>
          <div className='h-6 w-[1px] bg-neutral-400' />
          {/* Nav */}
          <ul className='flex gap-4' >
            {navLinks.map(({ label, href }) => {
              return (
                <NavLink key={label} to={href} className={({ isActive }) =>
                  isActive ? "font-bold" : "font-semibold text-neutral-500"
                } >{label}</NavLink>
              )
            })}
            {userInfo?.role === 'admin' && (
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-semibold text-neutral-500"
                }
              >
                Users
              </NavLink>
            )}
          </ul>
        </section>
        {/* right */}
        <section className="flex gap-2">
          {!userInfo ?
            (
              <>
                <Button variant='outline' onClick={navigateLogout}>Login</Button>
                <Button onClick={navigateSignup}>Sign Up</Button>
              </>
            ) : (
              <section className="flex gap-2" >
                <div variant="outline"
                  className="px-4 py-1 border border-black/20 rounded-full shadow-md flex items-center gap-2">
                  <span className="font-medium flex items-center gap-2" >
                    <User className="size-4" />
                    {userInfo.username}
                  </span>
                </div>
                <div onClick={handleLogout} className="group size-8 border border-black/20 rounded-full shadow-md flex items-center justify-center">
                  <LogOut className='size-4 group-hover:text-red-500 text-bold' />
                </div>
              </section>
            )}
        </section>
      </main>
    </nav >
  );
}

export default Navbar;
