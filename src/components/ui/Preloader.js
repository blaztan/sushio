import React from "react"
import loader from "../../assets/preloader.svg"

const Preloader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-main">
      <img src={loader} alt="preloader" />
    </div>
  )
}

export default Preloader
