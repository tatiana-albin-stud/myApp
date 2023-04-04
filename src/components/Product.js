import { FaTimes } from 'react-icons/fa'

const Product = ({ product, onDelete, onToggle }) => {
  return (
    <div
      className={`product ${product.size && 'size'}`}
      onDoubleClick={() => onToggle(product.id)}
     // onDoubleClick={() => onToggle(product.id)}
    >
      <h3>
        {product.title}{' '}
        <FaTimes
          style={{ color: '#c01414', cursor: 'pointer' }}
          onClick={() => onDelete(product.id)}
        />
      </h3>
      <p>{product.price}</p>
    </div>
  )
}

export default Product
