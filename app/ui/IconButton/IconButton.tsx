import {FC, ReactNode} from "react";

interface IconButtonProps {
    children?: ReactNode
}
export const IconButton: FC<IconButtonProps> = ({children}) => {
    return (
        <div className='hover:scale-105 transition-transform duration-200'>
            {children}
        </div>
    )
}