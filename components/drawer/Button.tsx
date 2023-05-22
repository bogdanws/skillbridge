export default function Button({children, label}: {children:React.ReactNode, label?: string}) {
    return <button className={'hover:bg-gray text-neutral-700 p-4 max-md:py-0.5 flex flex-col justify-center items-center'} aria-label={label}>
        {children}
      <span className={'font-medium'}>
        {label}
      </span>
    </button>;
}