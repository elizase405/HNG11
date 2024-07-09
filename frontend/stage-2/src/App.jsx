import { useState } from 'react';
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    	<BrowserRouter>
    		<Routes>
    			<Route index element={
      <Landing />} />
    			<Route path="/products" element={
      <Products />} />
    			<Route path="/cart" element={
      <Cart />} />
    		</Routes>
    	</BrowserRouter>
    </div>
  )
}

export default App
