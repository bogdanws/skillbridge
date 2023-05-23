"use client";

export default function Button({children} : {children: React.ReactNode}) {
	return <button className={'h-12 w-12 rounded-2xl m-2 mb-0 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4'}>
		{children}
	</button>
}