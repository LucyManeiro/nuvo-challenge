import ReactStars from "react-stars"

function Description({item, starRating}) {
 
  if(item.id){
    return (
    <div className="description">
      <div>
        <h3>{`$${item.price.toFixed(2)}`}</h3> 
        <p>{item.description}</p> 
      </div>
      <div>
        <h1>{item.rating.rate}</h1>
      <ReactStars
          count={5}
          value={item.rating.rate}
          size={24}
          isHalf={true}
          edit={false}
          activeColor="#ffd700"
      />
      </div> 
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  )
  } else {
    return (
      <div className="description">
        <h5>Select a product for more information</h5>
      </div>
    )
  }
    
}

export default Description
