const Footer = () => {
	return (
		<footer className="border-t-2 border-black mt-16 mx-6 sm:mx-20 pt-4 pb-16 flex justify-around flex-col md:flex-row">
			
			<div className="mt-8 md:w-1/3">
				<p className="font-semibold sm:w-4/5 md:w-5/5 pb-4">Stay up to date on the latest features and releases by joining our newsletter.</p>
				<div className="border-2 border-black py-2 w-5/5">
					<input type="text" className="px-2.5 w-3/5 lg:w-4/5 outline-none bg-transparent" placeholder="Email Address" />
					<label className="font-bold pl-4 cursor-pointer">Sign Up</label>
				</div>
				<p className="font-semibold pt-6">© 2024 Steeze. All rights reserved.</p>
			</div>
			<div>
				<h3 className="font-bold mt-12 md:mt-0">About Us</h3>
				<p className="text-[#a1a1a1] mt-4 cursor-pointer">Steeze Express</p>
				<p className="text-[#a1a1a1] cursor-pointer">Steeze Careers</p>
				<p className="text-[#a1a1a1] cursor-pointer">Terms and Conditions</p>
				<p className="text-[#a1a1a1] cursor-pointer">Privacy Notice</p>
				<p className="text-[#a1a1a1] cursor-pointer">Official Stores</p>
				<p className="text-[#a1a1a1] cursor-pointer">Flash Sales</p>
			</div>
			<div>
				<h3 className="font-bold mt-12 md:mt-0">Useful Link</h3>
				<p className="text-[#a1a1a1] mt-4 cursor-pointer">Steeze Express</p>
				<p className="text-[#a1a1a1] cursor-pointer">Delivery options and timelines</p>
				<p className="text-[#a1a1a1] cursor-pointer">Corporate and bulk purchases</p>
				<p className="text-[#a1a1a1] cursor-pointer">Returns & Refund Timeline</p>
				<p className="text-[#a1a1a1] cursor-pointer">Return Policy</p>
			</div>
			<div>
				<h3 className="font-bold mt-12 md:mt-0">Follow Us</h3>
				<p className="text-[#a1a1a1] mt-4 cursor-pointer">Facebook</p>
				<p className="text-[#a1a1a1] cursor-pointer">Instagram</p>
				<p className="text-[#a1a1a1] cursor-pointer">X</p>
				<p className="text-[#a1a1a1] cursor-pointer">LinkedIn</p>
				<p className="text-[#a1a1a1] cursor-pointer">Youtube</p>
			</div>
		</footer>
	);
}

export default Footer;