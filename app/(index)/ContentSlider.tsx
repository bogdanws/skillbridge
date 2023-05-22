export function ContentSlider({children, className}: { children: any, className?: string }) {
	return <div className={`p-3 flex justify-center ${className}`}>
		<div className={"flex overflow-x-auto"}>
			{children}
		</div>
	</div>;
}

export function ContentSliderItem({title, author, price, image, rating}: {
	title: string,
	author?: string,
	price?: string,
	image?: string,
	rating?: number
}) {
	return <div className={"flex-shrink-0 w-64 p-3"}>
		<div className={"bg-white rounded-lg shadow-md overflow-hidden"}>
			<div className={"bg-gray-200 h-40 w-full"}
			     style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
			<div className={"p-4"}>
				<h3 className={"font-bold text-xl mb-2"}>{title}</h3>
				{author && <p className={"text-gray-700 text-base"}>{author}</p>}
				{price && <p className={"text-gray-700 text-base"}>{price}</p>}
				{rating && <p className={"text-gray-700 text-base text-center"}>{rating}/5 ⭐</p>}
			</div>
		</div>
	</div>;
}