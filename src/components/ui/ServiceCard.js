import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServiceCard = ({ name, icon }) => {
  return (
    <div className="rounded bg-main-100 p-14  text-center h-92">
      <div className="mb-6 text-9xl text-secondary">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 className="text-3xl mb-4 font-bold font-main text-primary">{name}</h4>
      <p className="text-xl text-gray-600 font-cusom">
        Lorem ipsum dolor <br /> sit amet.
      </p>
    </div>
  )
}

export default ServiceCard
