import React from "react"
import Image from "../image"

const DishCard = ({ fluid, name, price, className = "" }) => {
  return (
    <div className={`${className} relative h-96 rounded-md`}>
      <div className="w-100 h-96 rounded-md overflow-hidden">
        <Image fluid={fluid} />
      </div>
      <div className="bg-secondary-100 font-custom absolute p-4 bottom-0 w-full rounded-b-md">
        <p className="text-2xl text-white capitalize mb-6 font-bold ">{name}</p>
        <span className="text-xl text-gray-100 mr-6 capitalize">
          start from:
        </span>
        <span className="text-2xl text-white font-bold ">${price}</span>
      </div>
    </div>
  )
}

export default DishCard
