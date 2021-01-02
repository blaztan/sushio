import React from "react"
import sushi from "../assets/sushi.png"
import { graphql, useStaticQuery } from "gatsby"

const Opening = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hours" } }) {
        frontmatter {
          title
          date1
          date2
          time1
          time2
        }
      }
    }
  `)

  const data = markdownRemark.frontmatter
  return (
    <section
      style={{ backgroundImage: `url(${sushi})` }}
      className="pt-36  bg-right-top bg-no-repeat min-h-screen flex items-center"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex space-x-6 items-center justify-center mb-20">
          <span className="h-2 w-16 rounded bg-primary"></span>
          <h2 className="text-6xl text-primary capitalize font-bold font-main">
            {data.title}
          </h2>
          <span className="h-2 w-16 rounded bg-primary"></span>
        </div>
        <div className="grid grid-cols-2 gap-10 justify-center max-w-screen-md mx-auto text-center">
          <div>
            <h3 className="text-3xl text-secondary capitalize font-bold font-custom mb-6">
              {data.date1}
            </h3>
            <p className="text-3xl font-medium font-custom text-black">
              {data.time1}
            </p>
          </div>
          <div>
            <h3 className="text-3xl text-secondary capitalize font-bold font-custom mb-6">
              {data.date2}
            </h3>
            <p className="text-3xl font-medium font-custom text-black">
              {data.time2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opening
