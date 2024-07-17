import Image from "next/image";
import arrow from "../../../public/images/icons/arrow.svg";

interface TabsMenuItemProps {
    id: number;
    title: string;
    icon: string;
    width: number;
    height: number;
    isActive: boolean;
    onClick: () => void;
}

export default function TabsMenuItem({ id, title, icon, width, height, isActive, onClick }: TabsMenuItemProps) {
    return (
        <button 
            className={`p-4 rounded-[8px] flex items-center justify-between min-w-[240px] md:min-w-[256px] bg-transparent md:bg-white ${isActive ? 'active-tab' : ''}`} 
            onClick={onClick}
        >
            <div className="flex items-center">
                <Image width={width} height={height} src={icon} alt="icon" />
                <span className="text-nowrap inline-block px-4 md:pl-4 font-medium text-[20px] leading-6 tracking-[0.5px] text-[#0F172A]">
                    {title}
                </span>
            </div>
            <div className="hidden md:block">
                <Image className={`${isActive ? 'md:block' : 'hidden'}`} width={24} height={24} src={arrow} alt="icon" />
            </div>
        </button>
    );
}
