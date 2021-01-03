import React from "react"
import { mainNavItems } from "./Navbar"
import scrollTo from "gatsby-plugin-smoothscroll"

const MobileNav = ({ isOpen, setOpen }) => {
  const Scroll = id => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <div
      className={`fixed top-0 right-0 
    w-screen md:w-1/2 transform 
    ${isOpen ? "translate-x-0" : "translate-x-full"} h-screen bg-main
    transition duration-200 ease-in-out
    lg:hidden overflow-hidden
    `}
    >
      <ul className="flex flex-col items-center h-full justify-center space-y-8">
        {mainNavItems.map((item, index) => (
          <li
            onClick={() => Scroll(item.slug)}
            key={`nav-item${index}`}
            className="text-2xl text-bold text-gray-800 font-custom capitalize cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
