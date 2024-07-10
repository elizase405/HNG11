import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutBody from "../components/CheckoutBody";

const Checkout = () => {
	return (
		<div className="md:bg-[#EFF2F6] w-full">
			<Navbar />
			<CheckoutBody />
			<Footer />
		</div>

	);
}

export default Checkout;