import React from "react"
import Title from "./ui/Title"
import { graphql, useStaticQuery } from "gatsby"
import ServiceCard from "./ui/ServiceCard"
import {
  faPhoneVolume,
  faBirthdayCake,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons"

const Service = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "service" } }) {
        frontmatter {
          title
          content
          service1
          service2
          service3
        }
      }
    }
  `)

  const data = markdownRemark.frontmatter
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto px-4 2xl-px-0">
        <Title title={data.title} text={data.content} />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-4">
          <ServiceCard name={data.service1} icon={faPhoneVolume} />
          <ServiceCard name={data.service2} icon={faBirthdayCake} />
          <ServiceCard name={data.service3} icon={faShippingFast} />
        </div>
      </div>
    </section>
  )
}

export default Service
