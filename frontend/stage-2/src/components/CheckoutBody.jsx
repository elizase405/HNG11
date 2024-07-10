const CheckoutBody = () => {
	const handleClick = () => {
		alert("Shipping details added!")
	}
	return (
		<div className="w-[80%] mx-auto">
			<h3 className="font-bold text-2xl mt-10 mb-2">Checkout</h3>
			<div class="flex flex-col md:flex-row md:flex-wrap">
				<div className="w-full md:w-1/2">
					<p className="font-semibold mb-4">Shipping Information</p>
					<input className="outline-none w-1/2 md:w-1/3 p-2 border border-black" type="text" placeholder="Michelle"/>
					<input className="outline-none w-1/2 md:w-1/3 p-2 border border-black md:ml-2 mb-2" type="text" type="text" placeholder="Urphazin"/><br />
					<input className="outline-none w-full md:w-2/3 p-2 border border-black mb-2" type="text" type="text" placeholder="49 FeatherStone Street, ECIY 8SY, United Kingdom"/><br />
					<input className="outline-none w-full md:w-2/3 p-2 border border-black mb-2" type="text" placeholder="Apartment"/><br />
					<input className="outline-none w-full md:w-2/3 p-2 border border-black mb-2" type="text" placeholder="United Kingdom"/><br />
					<select className="outline-none w-1/2 md:w-1/3 p-2 border border-black mb-2" name="state">
						<option value="london">London</option>
						<option value="london">Lagos</option>
						<option value="london">Nairobi</option>
						<option value="london">Accra</option>
						<option value="london">Others</option>
					</select>
					<input className="outline-none w-1/2 md:w-1/3 p-2 border border-black mb-2 md:ml-2" type="text" placeholder="ECIY 8SY"/><br />
					<input className="outline-none md:w-2/3 p-2 border border-black mb-2 w-full" type="text" placeholder="Optional"/><br />
					<input className="accent-black w-5 h-5 mr-2 mt-2" id="saveInfo" type="checkbox" defaultChecked/><label htmlFor="saveInfo" >Save contact information</label>
					<button onClick={handleClick} className="w-full block pt-2 mt-10 rounded-md text-center text-white h-10 w-5/5 md:w-2/3 bg-[#ff8000] mt-3 text-sm font-semibold pb-2">Continue to shipping</button>
				</div>
			</div>
		</div>

	);
}

export default CheckoutBody;
