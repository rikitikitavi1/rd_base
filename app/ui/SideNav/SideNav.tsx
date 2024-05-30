import {SideNavItem} from "@/app/ui/SideNav/SideNavItem";
import {CiCircleList, CiLogout, CiSaveUp1} from "react-icons/ci";
import Link from "next/link";

export const SideNav = () => {
    const routeConfig = [
        {href: '/base/list', text: 'Список', icon: <CiCircleList/>},
        {href: '/base/create', text: 'Добавить', icon: <CiSaveUp1/>},
    ]
    return (
        <div className="bg-primary w-48 min-h-screen shadow-md">
                <div className="p-3">
                    <h3 className="text-2xl font-bold text-white ">База документов</h3>
                    <div className='border-2 mt-3'></div>
                </div>

            <nav className="mt-10">
                {routeConfig.map((item) =>
                    <SideNavItem href={item.href} text={item.text} icon={item.icon} key={item.href}/>
                )}

            </nav>
            <Link href='/'
                  className="flex items-center mt-2 w-48 py-1 px-3 text-white hover:bg-gray-100 hover:text-gray-800 absolute bottom-4">
                <CiLogout/><span className="mx-4">Выйти</span>
            </Link>
        </div>
    );
};

export default SideNav;