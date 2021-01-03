import React, { useEffect } from "react"
import About from "../components/About"
import Booking from "../components/Booking"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Service from "../components/Service"
import Opening from "../components/Opening"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Preloader from "../components/ui/Preloader"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const slideLeft = gsap.utils.toArray(".slide-left")
    slideLeft.forEach(element => {
      gsap.from(element, {
        x: "-100%",
        opacity: 0,
        duration: 1.3,
        ease: "expo.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: element,
        },
      })
    })

    const slideRight = gsap.utils.toArray(".slide-right")
    slideRight.forEach(element => {
      gsap.from(element, {
        x: "100%",
        opacity: 0,
        duration: 1.3,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })

    const slideUp = gsap.utils.toArray(".slide-up")
    slideUp.forEach(element => {
      gsap.from(element, {
        y: "100%",
        opacity: 0,
        duration: 1.4,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })
    const slideDown = gsap.utils.toArray(".slide-down")
    slideDown.forEach(element => {
      gsap.from(element, {
        y: "-100%",
        opacity: 0,
        duration: 1.4,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })
    gsap.from(".list-animation .item", {
      y: -100,
      opacity: 0,
      duration: 1.4,
      ease: "expo.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".item",
      },
    })
  }, [])
  return (
    <>
      {typeof window !== undefined ? (
        <Layout>
          <SEO title="Home" />
          <Hero />
          <About />
          <Booking />
          <Service />
          <Opening />
          <Menu />
          <Footer />
        </Layout>
      ) : (
        <Preloader />
      )}
    </>
  )
}

export default IndexPage
