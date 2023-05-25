import {twMerge} from "tailwind-merge";

export default function Input({type, name, id, placeholder, defaultValue, minLength, className, ...props}: InputProps) {
	const classes = twMerge('shadow-sm focus:ring-primary focus:border-primary-500 block w-full sm:text-sm ' +
		'border-gray-300 rounded-md mb-3', className);

	return <input type={type} name={name} id={id}
	              placeholder={placeholder} defaultValue={defaultValue}
	              minLength={minLength} {...props}
	              className={classes}/>
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: string;
	name: string;
	id: string;
	placeholder?: string;
	defaultValue?: string;
	className?: string;
}