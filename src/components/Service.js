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
    <section className="pt-32">
      <div className="max-w-screen-2xl mx-auto">
        <Title title={data.title} text={data.text} />

        <div className="grid grid-cols-3 gap-10">
          <ServiceCard name={data.service1} icon={faPhoneVolume} />
          <ServiceCard name={data.service2} icon={faBirthdayCake} />
          <ServiceCard name={data.service3} icon={faShippingFast} />
        </div>
      </div>
    </section>
  )
}

export default Service
