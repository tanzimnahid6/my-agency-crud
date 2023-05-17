const PricingCard = ({ price }) => {
 
  const { type, description, price: pricing } = price
  
  return (
    <div>
      <div className="card h-56 w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{type}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <p className="text-blue-600 font-bold">{pricing}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
