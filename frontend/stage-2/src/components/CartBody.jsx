import womenwatch from "../img/products/womenwatch.png"
import womenwatch2 from "../img/products/womenwatch2.png"
import { Link } from "react-router-dom";

const CartBody = () => {
	return (
		<div className="w-[80%] mx-auto">
			<h3 className="font-bold text-2xl mt-10 mb-2">Your Cart</h3>
			<div className="flex flex-col ">
				<div>
					<p className="font-semibold mb-4">Not ready to checkout? <Link to="/products" className="text-[#ff8000]" >Continue Shopping</Link></p>
					<div className="flex">
						<img src={womenwatch} alt="women's watch" className="w-[40%] h-[40%] sm:w-[10%] sm:h-[10%] mr-2"/>
						<div>
							<p className="font-bold text-lg">Women Girl Watch Silicone Printed F</p>
							<p className="font-semibold text-sm">Size L</p>
							<p className="font-semibold text-sm">Quantity 1</p>
							<p className="font-bold text-lg">$230</p>
						</div>
					</div>
					<div className="border border-black my-4 w-4/4 md:w-2/5"></div>
					<div className="flex">
						<img src={womenwatch2} alt="women's watch" className="w-[40%] h-[40%] sm:w-[10%] sm:h-[10%] mr-2"/>
						<div>
							<p className="font-bold text-lg">Fashionable Women Girl Watch Sil...</p>
							<p className="font-semibold text-sm">Size S</p>
							<p className="font-semibold text-sm">Quantity 1</p>
							<p className="font-bold text-lg">$55</p>
						</div>
					</div>
				</div>
				<button onClick={() => handleAddToCart(10)} className="block pt-2 mt-10 rounded-md text-center text-white h-10 w-5/5 md:w-2/5 bg-[#ff8000] mt-3 text-sm font-semibold pb-2">Continue to checkout</button>
			</div>
		</div>

	);
}

export default CartBody;