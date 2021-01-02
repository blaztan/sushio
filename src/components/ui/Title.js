import React from "react"

const Title = ({ title, text }) => {
  return (
    <div className="flex justify-between items-center mb-20">
      <div className="flex space-x-4 items-center">
        <span className="h-28 w-4 bg-secondary"></span>
        <h2 className="text-primary leading-snug w-3/5 text-5xl font-main font-bold capitalize">
          {title}
        </h2>
      </div>
      {text && (
        <p className="w-1/2 text-2xl font-custom text-gray-600">{text}</p>
      )}
    </div>
  )
}

export default Title
