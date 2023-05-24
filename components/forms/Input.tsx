export default function Input({type, name, id, placeholder, defaultValue, minLength, className}: {
	type: string,
	name: string,
	id: string,
	placeholder?: string,
	defaultValue?: string,
	minLength?: number,
	className?: string
}) {
	return <input type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue}
	              minLength={minLength}
	              className={`shadow-sm focus:ring-primary focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3 ${className}`}
	/>
}