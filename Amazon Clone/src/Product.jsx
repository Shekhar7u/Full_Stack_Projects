import { useStateValue } from './StateProvider'
import './css/Product.css'

// eslint-disable-next-line react/prop-types
function Product({ id,title, image, price, rating }) {
const[{cart},dispatch]=useStateValue()

console.log("this is the cart >>>",cart)

    const addToCart=()=>{
//dispatch the item into the data layer
dispatch({
    type:'Add_To_Cart',
    item:{
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating,
    },
})
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product