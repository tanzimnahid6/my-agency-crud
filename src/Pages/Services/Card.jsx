import { Link } from "react-router-dom"


const Card = ({ service }) => {

  const { _id, name, img, description } = service

  return (
    <div className="card w-96 glass shadow-lg m-2">
      <figure className="w-auto h-80">
        <img
        className=" w-full h-full rounded-md shadow-md  object-cover"
          src={img}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        
        <div className="card-actions justify-end">
         <Link to={`service/${_id}`}> <button  className="btn  btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Card
