const Category = ({ img, alt, p }) => {
	return (
		<div>
			<img className="ml-5 w-5/6" src={img} alt={alt} />
			<p className="font-bold mb-5">{p}</p>
		</div>
	)
}
export default Category;