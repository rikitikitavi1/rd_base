'use client'
import {FC} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {IconType} from "react-icons";

interface SideNavItemProps {
    href: string
    text: string
    icon: any
}

export const SideNavItem: FC<SideNavItemProps> = ({href, text, icon}) => {
    const pathname = usePathname()
    const LinkIcon = icon;
    return (
        <Link href={href}
              className={clsx("flex items-center mt-2 py-1 px-3 text-white hover:bg-gray-100 hover:text-gray-800", {'bg-blue-500': pathname === href})}>
            {icon}<span className="mx-4">{text}</span>
        </Link>
    )
}