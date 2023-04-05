import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import FindProduct from './components/FindProduct'
import About from './components/About'

const App = () => {
  const [showFindProduct, setShowFindProduct] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }

    getProducts()
  }, [])

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()

    return data
  }

  // Fetch Product
  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()

    return data
  }

  // Find Product
  const FindProduct = async (product) => {
    const res = await fetch('http://localhost:5000/product/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })

    const data = await res.json()

    setProducts([...products, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newProduct = { id, ...product }
    // setProducts([...products, newProduct])
  }

  // Delete Product
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setProducts(products.filter((product) => product.id !== id))
      : alert('Error Deleting This Product')
  }

  // Toggle Size
  const toggleSize = async (id) => {
    const productToToggle = await fetchProduct(id)
    const updProduct = { ...productToToggle, reminder: !productToToggle.reminder }

    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updProduct),
    })

    const data = await res.json()

    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, reminder: data.reminder } : product
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onFind={() => setShowFindProduct(!showFindProduct)}
          showFind={showFindProduct}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showFindProduct && <FindProduct onFind={FindProduct} />}
                {products.length > 0 ? (
                  <Products
                    products={products}
                    onDelete={deleteProduct}
                    onToggle={toggleSize}
                  />
                ) : (
                  'No Products To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
