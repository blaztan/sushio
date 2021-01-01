import React from "react"

const FormInput = ({ type, label, placeholder }) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label className="text-xl font-bold text-black font-custom">
          {label}
        </label>
      )}
      <input
        type={type}
        className="px-4 h-14 bg-white border border-warm-gray-400"
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  )
}

export default FormInput
