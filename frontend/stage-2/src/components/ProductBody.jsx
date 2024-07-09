import Product from "./Product";
import smartwatch from "../img/products/smartwatch.png"
import menflower from "../img/products/menflower.png"
import purpledress from "../img/products/purpledress.png"
import mendress from "../img/products/mendress.png"
import mendress2 from "../img/products/mendress2.png"
import menwatch from "../img/products/menwatch.png"
import gown from "../img/products/gown.png"
import womenwatch from "../img/products/womenwatch.png"
import star from "../img/products/star.png"
import cap from "../img/products/cap.png"

const ProductBody = ({ handleMoreProducts, handleAddToCart }) => {
	return (
		<div className="w-[80%] mx-auto">
			<div>
				<h1 className="font-bold text-xl md:text-3xl">Our Products</h1>
				<p className="text-[#979797] md:w-1/3 mt-1">Our fashion brand offers a range of personalized services to enhance your shopping experience. From expert styling advice to custom tailoring, we are here to help you look and feel your best.</p>
			</div>
			<p className="md:hidden font-semibold text-xl text-right py-8">Filters <span className="text-[#d7d7d7] underline text-sm pl-2">Clear filters</span></p>
			<div className="md:grid md:grid-cols-4 md:grid-rows-1 md:pt-16">
			<div className="hidden md:block">
				<p className="font-semibold text-xl">Filters</p>
				<p className="font-bold text-sm pt-3 pb-2">Categories</p>
				<input type="checkbox" id="all" className="accent-black w-5 h-5 mr-2" defaultChecked/><label htmlFor="all">All</label><br />
				<input type="checkbox" id="women" className="accent-black w-5 h-5 mr-2"/><label htmlFor="women">Women's Wear</label><br />
				<input type="checkbox" id="men" className="accent-black w-5 h-5 mr-2"/><label htmlFor="men">Men's Wear</label><br />
				<input type="checkbox" id="menaccessory" className="accent-black w-5 h-5 mr-2"/><label htmlFor="menaccessory">Men's Accessories</label><br />
				<input type="checkbox" id="womenaccessory" className="accent-black w-5 h-5 mr-2"/><label htmlFor="womenaccessory">Women's Accessories</label>
			</div>
			<div className="md:col-span-3 grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 gap-2">
				<Product img={smartwatch} name={"Stainless Steel light Wristwatch"} price={"$150"} handleAddToCart={handleAddToCart} imgNo={1}/>
				<Product img={menflower} name={"Mens Flowery long sleeve dress"} price={"$125"} handleAddToCart={handleAddToCart} imgNo={2}/>
				<Product img={purpledress} name={"Purple Bilq Party Dress"} price={"$105"} handleAddToCart={handleAddToCart} imgNo={3}/>
				<Product img={mendress} name={"Mens Dress Shirts Long sleeve blue"} price={"$59"} handleAddToCart={handleAddToCart} imgNo={4}/>
				<Product img={cap} name={"Asni for Men Waterproof Leather Smart Wrist"} price={"$240"} handleAddToCart={handleAddToCart} imgNo={5}/>
				<Product img={mendress2} name={"Mens Dress Shirts Long Sleeve Business"} price={"$68"} handleAddToCart={handleAddToCart} imgNo={6}/>
				<Product img={menwatch} name={"NDS Leather Iced Men’s Wristwatch"} price={"$320"} handleAddToCart={handleAddToCart} imgNo={7}/>
				<Product img={gown} name={"Beautiful Ladies Fashionable Gown"} price={"$310"} handleAddToCart={handleAddToCart} imgNo={8}/>
				<Product img={womenwatch} name={"Women’s Classic Digital Wristwatch"} price={"$230"} handleAddToCart={handleAddToCart} imgNo={9}/>
				<div className="md:hidden">
					<img src={mendress2} alt="a product"/>
					<p className="font-bold pt-3">Mens Dress Shirts Long Sleeve Business</p>
					<span>68</span>
					<img className=" pl-2 inline w-[20px] h-[20px]" src={star}/>
					<img className=" pl-2 inline w-[20px] h-[20px]" src={star}/>
					<img className=" pl-2 inline w-[20px] h-[20px]" src={star}/>
					<img className=" pl-2 inline w-[20px] h-[20px]" src={star}/>
					<span className="pl-2">(2)</span>
					<button onClick={() => handleAddToCart(10)} className="block pt-2 rounded-md text-center text-white h-10 w-full bg-[#ff8000] mt-3 text-sm font-semibold pb-2">ADD TO CART</button>
				</div>
			</div>
		</div>
		<div className="flex justify-center items-center">
			<button onClick={handleMoreProducts} className="border-2 border-[#ff8000] bg-red text-[#ff8000] font-semibold py-2 px-12 md:my-20 lg:w-1/4 self-center hover:bg-[#ff8000] hover:text-black">Load More Products</button>
		</div>
	</div>

	);
}

export default ProductBody;