import { useState } from 'react'

const FindProduct = ({ onFind }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState()
  const [size, setSize] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please complete the data to find a product')
      return
    }

    onFind({ title, price, size })

    setTitle('')
    setPrice()
    setSize('')
  }

  return (
    <form className='Find-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text'
          placeholder='product title'
          style={{ backgroundColor: '#64C5E6'}}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='number'
          placeholder='preffered price'
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

      <input type='submit' value='Find Product' className='btn btn-block' />
    </form>
  )
}

export default FindProduct
