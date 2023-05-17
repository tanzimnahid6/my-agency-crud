import { useEffect, useState } from "react"
import Card from "./Card"


const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 bg-lime-50 my-4 justify-items-center">
      {services && services.map((service) => <Card  service={service} key={service._id}></Card>)}
    </div>
  )
}

export default Services
