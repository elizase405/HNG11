import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartBody from "../components/CartBody";

const Cart = ({ no }) => {
	console.log(no)
	return (
		<div className="md:bg-[#EFF2F6] w-full">
			<Navbar />
			<CartBody />
			<Footer />
		</div>

	);
}

export default Cart;