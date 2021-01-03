import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="bg-main min-h-screen min-w-screen overflow-x-hidden">
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
