import React, { useState } from "react"
import logo from "../assets/logo.png"
import Navbar from "./ui/Navbar"
import MobileNav from "./ui/MobileNav"
import { Squash as Hamburger } from "hamburger-react"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="absolute w-full top-0 left-0 z-10 overflow-x-hidden">
      <div className="max-w-screen-2xl 2xl:px-0 px-4 mx-auto">
        <nav className="flex justify-between items-end  2xl:pr-0 xl:pr-6">
          <div className="logo w-36 md:w-auto">
            <img src={logo} alt="logo" />
          </div>
          <div className="lg:hidden z-30">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#362E74"
              hideOutline={true}
              rounded
              size={36}
            />
          </div>
          <Navbar />
          <MobileNav isOpen={isOpen} setOpen={setOpen} />
        </nav>
      </div>
    </header>
  )
}

export default Header
