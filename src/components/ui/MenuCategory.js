import React from "react"
import Image from "../image"

const MenuCategory = ({ data }) => {
  const arr = [1, 2, 3, 4, 5, 6]

  return (
    <div className="grid grid-cols-2 gap-4 max-w-screen-lg mx-auto">
      {arr.map((num, i) => (
        <div key={i} className="flex items-center space-x-6 mb-6">
          <div className="rounded-full h-40 w-40 overflow-hidden">
            <Image fluid={data[`img${num}`].childImageSharp.fluid} />
          </div>
          <div>
            <p className="text-2xl font-custom text-primary capitalize">
              {data[`item${num}`]}
            </p>
            <span className="text-xl font-custom text-gray-700">
              Price:
              <span className="ml-2 text-2xl font-bold text-secondary">
                ${data[`price${num}`]}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuCategory
