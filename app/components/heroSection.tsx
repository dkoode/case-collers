import Link from "next/link";
import Image from "next/image";

import hero from '../../public/images/shoe-hero.webp';
export default function HeroSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 py-12 md:px-0 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-x-20 md:justify-between">
                <div className="flex flex-col gap-y-8">
                    <h1 className="font-bold text-[56px] leading-[61px] md:leading-[79px] text-center md:text-left md:text-7xl text-[#0F172A] ">
                        Collectible Sneakers
                    </h1>
                    <p className="leading-7 text-center font-normal md:text-left text-[18px] text-[#0F172A] max-w-[714px]">
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </p>
                    <div className="flex items-center justify-berween px-[7px] md:px-0">
                        <Link className="text-nowrap font-medium tracking-[0.5px] px-8 py-4 text-[20px] leading-6 border-2 rounded-[8px] border-[#78350F] text-[#78350F]" href="/signup">
                            Sign up now
                        </Link>
                        <button className="flex items-center gap-x-2 px-4 py-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z" fill="#78350F"/>
                            </svg>
                            <span className="text-[#78350F] text-base tracking-[0.5px] font-medium text-nowrap">Watch Demo</span>
                        </button>
                    </div>
                </div>
                <div className="relative pt-8 md:pt-0">
                    <Image src={hero} width={486} height={423} alt="Sneakers" />
                </div>
            </div>
        </section>
    )
}