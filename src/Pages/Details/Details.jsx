import { useContext, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import PricingCard from "../Pricing/PricingCard"

const Details = () => {
  const details = useLoaderData()
  const { user } = useContext(AuthContext)
  const userEmail = user.email
  const pricing = details.priceDetails
  console.log(pricing)
  console.log(details)
  const { img, name} = details
  const [f1, f2, f3] = details.features

  const [selectedFeature, setSelectedFeature] = useState("")

  const handleFeatureChange = (e) => {
    setSelectedFeature(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const name = e.target.name.value
    const bookingInfo = { name, selectedFeature, email }
    setSelectedFeature("")

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          alert('Data added');
        }
      })
  }

  return (
    <div className="container my-8 rounded bg-slate-200 mx-auto p-8">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full  md:w-1/2">
          <img src={img} alt="Feature" className=" w-full rounded" />
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                defaultValue={userEmail}
                readOnly
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                readOnly
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="features" className="block mb-2 font-bold">
                Features:
              </label>
              <select
                id="features"
                value={selectedFeature}
                onChange={handleFeatureChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                required
              >
                <option value="">Select a feature</option>
                <option value={f1}>{f1}</option>
                <option value={f2}>{f2}</option>
                <option value={f3}>{f3}</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold mt-12 underline">Price Details</h1>
      <div className="grid grid-cols-3 my-8">
        {pricing &&
          pricing.map((price, i) => (
            <PricingCard key={i} price={price}></PricingCard>
          ))}
      </div>
    </div>
  )
}

export default Details
