import {useState, useEffect} from 'react'
import { ProductoContext } from './ProductosContext'

export const ProductosProvider = ({children}) => {

  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      data.map(item=>item.agregar = false)
      setProductos(data)
    } catch (error) {
      console.error('El error es: ',error)
    }
  }

  useEffect(() => {
    fetchProductos()
  }, [])
  

  return (
    <ProductoContext.Provider value={{productos}}>
      {children}
    </ProductoContext.Provider>
  )
}
