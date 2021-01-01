import React from "react"
import pattern from "../assets/pattern.svg"
import sushi from "../assets/img_01.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen bg-right no-repeat">
      <div
        style={{ backgroundImage: `url(${pattern})` }}
        className="h-full w-1/2 absolute right-0 bg-no-repeat"
      ></div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 h-screen items-center">
          <div className="h-1/2 self-center w-full pr-10">
            <img src={sushi} alt="sushi" className="w-full h-full" />
          </div>

          <div className="relative  h-full">
            <h1 className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-9xl text-primary capitalize font-bold font-main">
              Japanese <br /> Restaurant
            </h1>
            <div className="flex items-end h-full">
              <p className="text-2xl text-secondary font-custom capitalize p-6 bg-main">
                view full menu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
