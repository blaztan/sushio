import React from "react"
import Img from "gatsby-image"

const Image = ({ fluid }) => {
  if (!fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={fluid} />
}

export default Image
