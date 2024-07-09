import path from "../img/navbar/path.png"
import vector from "../img/navbar/vector.png"
import search from "../img/navbar/search.png"
import user from "../img/navbar/user.png"
import love from "../img/navbar/love.png"
import cart from "../img/navbar/cart.png"
import hamburger from "../img/navbar/hamburger.png"
import orange from "../img/navbar/orange.png"
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-around h-24 items-center max-w-full">
			<h1 className="font-bold text-2xl sm:text-3xl lg:text-2xl mb-4">Steeze</h1>
			<div className=" md:hidden
			space-x-6">
				<img src={search} className="w-6 h-6 sm:w-7 sm:h-7 inline cursor-pointer mb-4" alt="search_icon"/>
				<img src={user} className="w-6 h-6 sm:w-7 sm:h-7 inline cursor-pointer mb-4" alt="user_icon"/>
				<img src={love} className="w-6 h-6 sm:w-7 sm:h-7 inline cursor-pointer mb-4" alt="love_icon"/>
				<Link to="/cart"><img src={cart} className="w-6 h-6 sm:w-7 sm:h-7 inline cursor-pointer mb-4" alt="cart_icon"/></Link>
				<div style={{backgroundImage: `url(${hamburger})`}} className="w-7 h-7 sm:w-10 sm:h-10 inline-block bg-no-repeat bg-center bg-[#ff8000] cursor-pointer">
				</div>
			</div>
			<div className="hidden md:flex list-none space-x-4 lg:space-x-8 text-sm">
				<li className="cursor-pointer hover:underline hover:text-base"><Link to="/">Home</Link></li>
				<li className="cursor-pointer hover:underline hover:text-base">New Arrivals</li>
				<li className="cursor-pointer hover:underline hover:text-base">Sales</li>
				<li className="cursor-pointer hover:underline hover:text-base">Categories</li>
			</div>
			<div className="hidden md:flex text-sm">
				<div className="m-auto bg-white rounded border-2">
					<img src={search} alt="search_icon" className="w-4 h-4 inline pl-1" />
					<input type="text" className="py-2 px-2.5 lg:w-[395px] outline-none" placeholder="Search" />
				</div>
				<div className="md:flex space-x-4 lg:space-x-8 pl-4 list-none">
					<div className="m-auto">
						<img src={vector} alt="vector" className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline" />
						<li className="inline pl-2 cursor-pointer hover:underline hover:text-base" >Account</li>
					</div>
					<div className="m-auto">
						<img src={vector} alt="vector" className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline" />
						<li className="inline pl-2 cursor-pointer hover:underline hover:text-base">Help</li>
					</div>
					<div className="m-auto">
						<img src={vector} alt="vector" className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline" />
						<li className="inline pl-2 cursor-pointer hover:underline hover:text-base"><Link to="/cart">Cart</Link></li>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar