import React, {ReactNode} from "react";
import {Button} from "@/app/ui/Button/Button";
import { IoBookOutline } from "react-icons/io5";
import Link from "next/link";
import {IconButton} from "@/app/ui/IconButton/IconButton";

interface BaseItemProps {
    id: string
    name: string
    created_at: string
    updated_at: string
    author: string
}
export const BaseItem: React.FC<BaseItemProps> = ({name,created_at,updated_at,author,id}) => {
    return (
        <div className='bg-white text-black rounded-md shadow-md m-2 p-2'>
            <div className='flex items-center justify-between'>
                <p className='text-xl'>{name}</p>
                <Link  href={`/base/list/${id}`}>
                    <IconButton><IoBookOutline /></IconButton>

            </Link>
            </div>

            <p>Создано: {created_at}</p>
            <p>Обновлено: {updated_at}</p>
            <p>Добавил: {author}</p>


        </div>
    )
}