import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./ui/Title"
import DishCard from "./ui/DishCard"

const About = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about" } }) {
        frontmatter {
          title
          content
          name1
          price1
          img1 {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name2
          price2
          img2 {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name3
          price3
          img3 {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const data = markdownRemark.frontmatter

  return (
    <section className="pb-28 flex items-center">
      <div className="max-w-screen-2xl mx-auto 2xl:px-0 px-4">
        <Title title={data.title} text={data.content} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <DishCard
            className="slide-left"
            fluid={data.img1.childImageSharp.fluid}
            price={data.price1}
            name={data.name1}
          />
          <DishCard
            className="slide-down"
            fluid={data.img2.childImageSharp.fluid}
            price={data.price2}
            name={data.name2}
          />
          <DishCard
            className="slide-right"
            fluid={data.img3.childImageSharp.fluid}
            price={data.price3}
            name={data.name3}
          />
          <div className="slide-up text-center self-center mt-20 lg:col-span-3">
            <span className="font-bold font-cusom text-primary text-2xl capitalize">
              View more
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
