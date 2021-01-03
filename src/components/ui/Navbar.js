import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export const mainNavItems = [
  {
    title: "Home",
    slug: "#home",
  },
  {
    title: "About",
    slug: "#about",
  },

  {
    title: "Reservation",
    slug: "#booking",
  },
  {
    title: "Service",
    slug: "#service",
  },
  {
    title: "Menu",
    slug: "#menu",
  },
  {
    title: "Contact",
    slug: "#contact",
  },
]

const Navbar = () => {
  return (
    <ul className="lg:flex space-x-8  lg:pb-2 hidden">
      {mainNavItems.map((item, index) => (
        <li
          onClick={() => scrollTo(item.slug)}
          key={`nav-item${index}`}
          className="text-xl text-medium text-gray-800 font-custom capitalize cursor-pointer"
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default Navbar
