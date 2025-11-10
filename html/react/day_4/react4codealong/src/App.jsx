import { useState, React } from "react"

function App() {
  const [cartItems, setCartItems] = useState([])

  const menuList = [
    { id: 1, name: 'Jollof Rice', price: 1500 },
    { id:2, name: 'Fried Rice', price: 1200},
    { id:2, name: 'Pounded Yam & Egusi', price: 2000},
    { id:2, name: 'Suya', price: 1000},
    { id:2, name: 'Plantain', price: 500},
  ]

  function addToCart(item) {
    const existing_item = cartItems.find(cartItem => cartItem.id === item.id )

    if(existing_item) {
      setCartItems(cartItems.map(cartItem => cartItem.id === item.id?
        {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem
      ))
    }

    else {
      setCartItems([...cartItems, {...item, quantity: 1}])
    }
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
  }

  function updateQuantity(item, updatedQuantity) {

    if(updateQuantity === 0) {
      removeFromCart(item)
    }
    else{
    setCartItems(cartItems.map(cartItem => cartItem.id === item.id?
      {...cartItem, quantity: updatedQuantity}: cartItem
    ))}
  }


  return(
    <div>
      <Parent></Parent>
    </div>
  )
}

export default App;