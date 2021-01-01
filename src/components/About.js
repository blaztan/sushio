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
    <section className="min-h-screen flex items-center">
      <div className="max-w-screen-2xl mx-auto">
        <Title title={data.title} text={data.content} />
        <div className="grid grid-cols-3 gap-4">
          <DishCard
            fluid={data.img1.childImageSharp.fluid}
            price={data.price1}
            name={data.name1}
          />
          <DishCard
            fluid={data.img2.childImageSharp.fluid}
            price={data.price2}
            name={data.name2}
          />
          <DishCard
            fluid={data.img3.childImageSharp.fluid}
            price={data.price3}
            name={data.name3}
          />
        </div>
        <div className="text-center mt-20">
          <span className="font-bold font-cusom text-primary text-2xl capitalize">
            View more
          </span>
        </div>
      </div>
    </section>
  )
}

export default About
