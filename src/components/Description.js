import ReactStarsRating from "react-awesome-stars-rating"

function Description({item}) {
 
  //if there is an item in state, the description will load
  if(item.id){
    return (
      <div className="description item-double">
        <div>
          <h3 id="desc">{`$${item.price.toFixed(2)}`}</h3> 
            <p>{item.description}</p> 
        </div>
        <div className="star-section">
        <ReactStarsRating
          count={5}
          value={item.rating.rate}
          isEdit={false}
          size={18}
          isHalf={true}
          primaryColor="#ffd700"
        /> 
        {`(${item.rating.count})`}
        </div> 
        <div className="cart">
          <button className="cart-button">Add to cart</button>
        </div>
      </div>
  )} else {
    return (
      <div className="description placeholder item-double">
        <h2>Select a product on the left for more information</h2>
      </div>
    )
  }  
}

export default Description
