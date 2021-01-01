import React from "react"
import Img from "gatsby-image"

const Image = ({ fluid }) => {
  if (!fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={fluid} className="w-full h-full" />
}

export default Image
