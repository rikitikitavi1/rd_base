interface ButtonProps {
    children: React.ReactNode;
    className?: string
    props?: any
}

export const Button: React.FC<ButtonProps> = ({children,className, ...props}) => {
    return (
        <button
            className={`bg-primary text-white rounded-sm p-1 px-2 hover:scale-105 transition-transform duration-200 ${className}`}
            {...props}>
            {children}</button>
    )
}