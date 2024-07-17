'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from '../../public/images/Collers.svg';
import hamburgerIcon from '../../public/images/icons/hamburger.svg';
import close from '../../public/images/icons/close.svg'
interface MenuLink {
    name: string;
    url: string;
}

const menuLinks: MenuLink[] = [
    {
        name: 'Products',
        url: '/products'
    },
    {
        name: 'Solutions',
        url: '/solutions'
    },
    {
        name: 'Pricing',
        url: '/pricing'
    },
    {
        name: 'Resources',
        url: '/resources'
    },
    {
        name: 'Log In',
        url: '/login'
    }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="flex items-center justify-between  max-w-[1280px] mx-auto md:py-6 py-4 px-4">
            <Link href="/">
                <Image src={logo} alt="logo" width={102} height={35}/>
            </Link>
            <button onClick={toggleMenu} className="md:hidden">
                <Image src={hamburgerIcon} alt="hamburger-icon"/>
            </button>
            <div className={`flex flex-col md:flex-row mobile-menu items-center gap-4 ${isOpen ? 'open-menu' : ''}`}>
                <button onClick={toggleMenu} className="md:hidden absolute top-4 right-5">
                    <Image src={close} alt="close-icon"/>
                </button>
                <ul className="flex flex-col md:flex-row items-center gap-4">
                    {menuLinks.map((link) => (
                        <li key={link.name}>
                            <Link className="text-[#78350F] text-base px-2 font-medium" href={link.url}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <Link className="text-[#78350F] text-base border-2 border-[#78350F] rounded-lg px-7 py-3 font-medium" href="/signup">
                    Sign up now
                </Link>
            </div>
        </nav>
    );
};

