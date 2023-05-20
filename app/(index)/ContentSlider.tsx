export function ContentSlider({children} : {children: any}) {
	return <div className={"m-3 flex justify-center"}>
		<div className={"flex overflow-x-auto"}>
			{children}
		</div>
	</div>;
}

export function ContentSliderItem({title, author, price, image}: {title: string, author: string, price: string, image: string}) {
	return <div className={"flex-shrink-0 w-64 p-3"}>
		<div className={"bg-white rounded-lg shadow-md overflow-hidden"}>
			<div className={"bg-gray-200 h-40 w-full"} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
			<div className={"p-4"}>
				<h3 className={"font-bold text-xl mb-2"}>{title}</h3>
				<p className={"text-gray-700 text-base"}>{author}</p>
				<p className={"text-gray-700 text-base"}>{price}</p>
			</div>
		</div>
	</div>;
}