import React from "react"

const Title = ({ title, text }) => {
  return (
    <div className="flex justify-between items-center mb-20 flex-wrap space-y-6 xl:space-y-0">
      <div className="flex space-x-4 items-center">
        <span className="xl:h-28 md:h-16 h-28 w-4 bg-secondary"></span>
        <h2 className="text-primary leading-snug xl:w-3/5 md:text-5xl text-4xl font-main font-bold capitalize">
          {title}
        </h2>
      </div>
      {text && (
        <p className="xl:w-1/2 w-full text-2xl font-custom text-gray-600">
          {text}
        </p>
      )}
    </div>
  )
}

export default Title
