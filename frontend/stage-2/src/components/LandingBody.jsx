import { Link } from "react-router-dom";
import Category from "../components/Category";
import womenswear from "../img/landing/womenswear.png"
import menswear from "../img/landing/menswear.png"
import accessory from "../img/landing/accessory.png"
import redshirt from "../img/landing/redshirt.png"
import brownsuit from "../img/landing/brownsuit.png"
import dress from "../img/landing/dress.png"
import watch from "../img/landing/watch.png"
import bag from "../img/landing/bag.png"
import shoe from "../img/landing/shoe.png"

const LandingBody = ({ handleClick, handleProduct }) => {
	return (
		<div className="flex flex-col items-center">
			<div className="text-center pt-4 pb-4">
				<div className="flex flex-col">
					<h2 className="font-semibold text-3xl">Categories</h2>
					<p className="text-[#979797] my-4 w-2/3 self-center">Explore our curated collection of contemporary fashion apparel and accessories. Find the perfect outfit for any occasion.</p>
					<button onClick={handleClick} className="border-2 border-[#ff8000] bg-red text-[#ff8000] font-semibold py-2 px-12 mb-10 w-25 self-center hover:bg-[#ff8000] hover:text-black">Shop All</button>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center">
					<Category img={womenswear} alt={"dress"} p={"Women's wear"}/>
					<Category img={menswear} alt={"shirt"} p={"Men's wear"}/>
					<Category img={accessory} alt={"watch"} p={"Accessories"} />
				</div>
			</div>
			<div className="text-center bg-[#fff2e6] pt-8 pb-14 w-full">
				<div className="flex flex-col">
					<h2 className="font-semibold text-3xl">Our latest arrivals</h2>
					<p className="text-[#979797] my-4 w-2/3 self-center ">Explore our showcase of up to 3 new arrivals or popular products. Each item is carefully selected to reflect the latest trends in contemporary fashion apparel and accessories.</p>
					<button onClick={handleClick} className="border-2 border-[#ff8000] text-[#ff8000] font-semibold py-2 px-12 w-25 self-center hover:bg-[#ff8000] hover:text-black">Shop All</button>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center">
					<div>
						<img src={redshirt} alt="redshirt" className="pt-10 md:pt-20 w-5/6 ml-5" />
					</div>
					<div>
						<img src={brownsuit} alt="brownsuit" className="pt-5 ml-5 w-5/6" />
					</div>
					<div>
						<img src={dress} alt="dress" className="pt-5  ml-5 md:pt-20 w-5/6" />
					</div>
				</div>
			</div>
			<div className="text-center pt-8 pb-4">
				<div className="flex flex-col">
					<h2 className="font-semibold text-3xl mb-4">Our Products</h2>
					<p className="text-[#979797] my-4 w-2/3 self-center">Our products are designed with attention to detail and made from premium materials, ensuring both comfort and durability.</p>
					<button onClick={handleProduct} className="border-2 border-[#ff8000] text-[#ff8000] font-semibold py-2 px-12 mb-10 w-25 self-center hover:bg-[#ff8000] hover:text-black">Shop All</button>
					</div>
				<div className="flex flex-col md:flex-row items-center justify-center">
					<div>
						<img src={watch} alt="watch" className="ml-5 w-5/6"/>
						<p className="font-bold my-3 ml-5 text-left">NDS Leather Iced Men’s Wristwatch</p>
						<p className="text-left mb-5 ml-5">$210</p>
					</div>
					<div>
						<img src={bag} alt="bag" className="ml-5 w-5/6" />
						<p className="font-bold my-3 ml-5 text-left">Beautiful Black Swag Bag for Adorable Ladies</p>
						<p className="text-left ml-5 mb-5">$150</p>
					</div>
					<div>
						<img src={shoe} alt="shoe" className="ml-5 w-5/6" />
						<p className="font-bold my-3 ml-5 text-left">Classis Women Shoe with Animal Skin</p>
						<p className="text-left ml-5 mb-5">$109</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingBody;