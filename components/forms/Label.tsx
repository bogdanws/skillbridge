export default function Label({children, htmlFor, className}: LabelProps) {
	return <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>{children}</label>
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}