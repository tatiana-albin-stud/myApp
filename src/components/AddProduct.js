import { useState } from 'react'

const AddProduct = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState()
  const [size, setSize] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a product')
      return
    }

    onAdd({ title, price, size })

    setTitle('')
    setPrice()
    setSize('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text'
          placeholder='Add Product'
          style={{ backgroundColor: '#64C5E6'}}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='number'
          placeholder='Add Price'
          style={{ backgroundColor: '#64C5E6'}}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Set Size</label>
        <input
          type='text'
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Product' className='btn btn-block' />
    </form>
  )
}

export default AddProduct
