import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBody from "../components/ProductBody";
import Cart from "../pages/Cart";

const Products = () => {
	const [cartNo, setCartNo] = useState([])
	const navigate = useNavigate();
	function handleMoreProducts() {
		alert("No more products. Please Check again later.")
	}
	function handleAddToCart(imgNo) {
		alert("Product added!")
		setCartNo([...cartNo, imgNo]);
	}

	return (
		<div className="md:bg-[#EFF2F6] w-full">
			<Navbar />
			<ProductBody handleMoreProducts={handleMoreProducts} handleAddToCart={handleAddToCart} />
			<Footer />
		</div>

	);
}

export default Products;