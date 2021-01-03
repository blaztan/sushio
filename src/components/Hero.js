import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import Image from "./image"
import { graphql, useStaticQuery } from "gatsby"
import su from "../data/hero/su.png"

const Hero = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero" } }) {
        frontmatter {
          link

          hero {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          bg {
            childImageSharp {
              fluid(maxWidth: 200) {
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
    <section className="relative overflow-x-hidden">
      <div
        style={{ backgroundImage: `url(${su})` }}
        className="absolute top-0 left-0 
      pointer-events-none h-screen w-screen
      xl:bg-right-top md:bg-right-bottom
      bg-no-repeat
      hidden md:block
      
      "
      ></div>
      <div className="max-w-screen-2xl mx-auto 2xl:px-0 px-4">
        <div className="grid xl:grid-cols-2 grid-cols-1 py-20 min-h-screen items-center">
          <div className=" self-center w-full pr-10">
            <div className="w-full h-full slide-left">
              <Image fluid={data.hero.childImageSharp.fluid} />
            </div>
          </div>

          <div className="relative  xl:h-full">
            <h1 className="slide-right xl:mb-0 mb-10 xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 2xl:text-9xl xl:text-7xl md:text-8xl text-5xl  text-primary capitalize font-bold font-main">
              Japanese <br /> <span className="hidden sm:inline">&nbsp;</span>{" "}
              Restaurant
            </h1>
            <div className="flex xl:items-end xl:h-full pb-24 ">
              <p className="slide-up text-2xl font-bold text-secondary tracking-wide font-custom capitalize">
                <span className="mr-2 text-3xl text-secondary">
                  <FontAwesomeIcon icon={faUtensils} />
                </span>{" "}
                {data.link}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
