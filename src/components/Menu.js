import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./ui/Title"
import MenuCategory from "./ui/MenuCategory"

const Menu = () => {
  const [current, setCurrent] = useState("drink")

  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "menu" } }) {
        frontmatter {
          title
          content
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "item" } } }) {
        edges {
          node {
            id
            frontmatter {
              type
              item1
              price1
              item2
              price2
              item3
              price3
              item4
              price4
              item5
              price5
              item6
              price6
              img1 {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img2 {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img3 {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img4 {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img5 {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img6 {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const menuData = markdownRemark.frontmatter
  const categoryData = allMarkdownRemark.edges

  return (
    <section className="min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <Title title={menuData.title} text={menuData.content} />
        <div className="mb-10 d-flex space-x-12 text-center">
          {["main", "dessert", "drink"].map((cat, i) => (
            <button
              onClick={() => setCurrent(cat)}
              className={`font-custom font-medium 
              capitalize text-white text-2xl 
              rounded focus:outline-none py-2 px-6 
              ${cat === current ? "bg-green-800" : "bg-secondary"}
              hover:bg-green-70 `}
            >
              {cat}
            </button>
          ))}
        </div>
        <div>
          {categoryData
            .filter(({ node }) => node.frontmatter.type === current)
            .map(({ node }) => (
              <MenuCategory data={node.frontmatter} key={node.id} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
