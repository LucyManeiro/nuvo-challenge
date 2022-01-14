import ReactStars from "react-rating-stars-component"
import {useState, useEffect} from "react"

function Description({id}) {
  const [starRating, setStarRating] = useState(0)
  const [product, setProduct] = useState({})

  useEffect(()=> {
    getDescription(id)
  },[id])

  const getDescription = async(id)=> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    setProduct(data)
    setStarRating(data.rating.rate)
  }

  function getStars(rating){
    return (
      <ReactStars
          count={5}
          value={rating}
          size={24}
          isHalf={true}
          activeColor="#ffd700"
      />
    )
  }


  if(product.id){
    return (
      <div>
        <h3>{`$${product.price.toFixed(2)}`}</h3> 
        <p>{product.description}</p> 
        <div>
       <div>
         {getStars(starRating)}
       </div> 
       <button>Add to cart</button>
       </div>
      </div>
  )
  } else {
    return (
      <div>
        <h5>Select a product for more information</h5>
      </div>
    )
  }
    
}

export default Description
