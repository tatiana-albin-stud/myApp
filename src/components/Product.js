
const Product = ({ product}) => {
        return (
            <div className="product">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p class="description">{product.description}</p>
                <p class="price">{product.price}</p>
                <button>Add to cart</button>
                <button>Remove from cart</button>
                <button>Checkout</button>
                <hr />
            </div>)
    }

export default Product