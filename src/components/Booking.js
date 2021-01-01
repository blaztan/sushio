import React from "react"
import FormInput from "./ui/FormInput"

const Booking = () => {
  return (
    <section className="h-auto py-32">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <form className="py-16 px-8 bg-light-white border border-warm-gray-400 rounded">
              <div className="grid grid-cols-2 gap-8 ">
                <FormInput type="text" label="Name" />
                <FormInput type="email" label="Email" />

                <FormInput type="phone" label="Phone" />
                <FormInput type="number" label="Table" placeholder="1" />

                <FormInput type="date" label="Date" />
                <FormInput type="number" label="Person" placeholder="2" />
              </div>
            </form>
          </div>
          <div className="relative">
            <h2 className="absolute -left-10 leading-normal text-7xl capitalize font-main font-bold text-primary">
              Table <br /> &nbsp;&nbsp;&nbsp;&nbsp; Booking
            </h2>
            <h3
              style={{ writingMode: "vertical-lr" }}
              className="absolute bottom-0 text-3xl font-bold text-secondary font-custom capitalize"
            >
              Make A reservation
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
