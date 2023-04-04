import Product from './Product'

const Products = ({ products, onDelete, onToggle }) => {
  return (
    <>
      {products.map((product, index) => (
        <Product key={index} product={product} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Products
