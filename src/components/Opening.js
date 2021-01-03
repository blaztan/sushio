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
      className=" md:bg-auto bg-contain bg-right-top bg-no-repeat min-h-screen flex items-center"
    >
      <div className="max-w-screen-2xl mx-auto px-4 2xl:px-0">
        <div className="flex md:space-x-6 space-x-4 items-center justify-center mb-20">
          <span className=" slide-left h-2 w-16 rounded bg-primary"></span>
          <h2 className="slide-up md:text-6xl text-center text-3xl text-primary capitalize font-bold font-main">
            {data.title}
          </h2>
          <span className="slide-right h-2 w-16 rounded bg-primary"></span>
        </div>
        <div className="grid sm:grid-cols-2 md:gap-10 grid-cols-1 gap-4 justify-center max-w-screen-md mx-auto text-center">
          <div>
            <h3 className="slide-down text-3xl text-secondary capitalize font-bold font-custom mb-6">
              {data.date1}
            </h3>
            <p className="slide-up text-3xl font-medium font-custom text-black">
              {data.time1}
            </p>
          </div>
          <div>
            <h3 className="slide-down text-3xl text-secondary capitalize font-bold font-custom mb-6">
              {data.date2}
            </h3>
            <p className="slide-up text-3xl font-medium font-custom text-black">
              {data.time2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opening
