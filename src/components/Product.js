
const Product = ({ product}) => {
        return (
            <div className="product">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <aside class="description">{product.description}</aside>
                <p class="price">Price: ${product.price}</p>
                <button class="btn-add">Add to cart</button>
                <button class="btn-remove">Remove from cart</button>
                <button class="btn-checkout">Checkout</button>
                <hr />
                <br/>
            </div>)
    }

export default Product