import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingBody from "../components/LandingBody";
import super_sale from "../img/super_sale.png"

const Landing = () => {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/')
	}
	function handleProduct() {
		navigate('/products')
		console.log("bye")
	}

	return (
		<div className="md:bg-[#EFF2F6] w-full">
			<Navbar />
			<img src={super_sale} className="max-w-full w-full"/>
			<h1 className="font-bold text-3xl md:text-4xl text-center mt-5 mb-16">
				Discover Your Unique Style With Us
			</h1>
			<LandingBody handleClick={handleClick} handleProduct={handleProduct}/>
			<Footer />
		</div>

	);
}

export default Landing;