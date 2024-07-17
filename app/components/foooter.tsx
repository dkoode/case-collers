import Link from "next/link"
import Image from "next/image"

import appStore from '../../public/images/app-store.webp'
import playStore from '../../public/images/play-store.webp'

import youtube from '../../public/images/icons/youtube.svg'
import facebook from '../../public/images/icons/facebook.svg'
import twitter from '../../public/images/icons/twitter.svg'
import instagram from '../../public/images/icons/ig.svg'
import linkedin from '../../public/images/icons/linkedin.svg'
import BottomBar from "./bottomBar"

export default function Footer(){
    const footerLinks = [
        {
            title:"Product",
            links:[
                {
                    title:"Pricing",
                    url:"/pricing"
                },
                {
                    title:"Overview",
                    url:"/overview"
                },
                {
                    title:"Browse",
                    url:"/browse"
                },
                {
                    title:"Accessibility",
                    url:"/accessibility"
                },
                {
                    title:"Five",
                    url:"/five"
                }
            ]
        },
        {
            title:"Solutions",
            links:[
                {
                    title:"Brainstorming",
                    url:"/brainstorming"
                },
                {
                    title:"Ideation",
                    url:"/ideation"
                },
                {
                    title:"Wireframing",
                    url:"/wireframing"
                },
                {
                    title:"Research",
                    url:"/research"
                },
                {
                    title:"Design",
                    url:"/design"
                }
            ]
        },
        {
            title:"Support",
            links:[
                {
                    title:"Contact Us",
                    url:"/contact-us"
                },
                {
                    title:"Developers",
                    url:"/developers"
                },
                {
                    title:"Documentation",
                    url:"/documentation"
                },
                {
                    title:"Integrations",
                    url:"/integrations"
                },
                {
                    title:"Reports",
                    url:"/reports"
                }
            ]
        }
    ]
    return(
        <footer className="w-full bg-[#0F172A] ">
            <div className="max-w-[1280px] mx-auto border-y-[1px] border-y-[#334155]">
                <div className="py-12 gap-y-12  flex flex-col md:flex-row md:items-start items-center">
                    <div className="w-full md:2/4 lg:w-1/4 flex flex-col">
                        <p className="font-medium text-base text-center md:text-left leading-[18px] mb-0 py-4 text-[#FFFFFF]">
                            {footerLinks[0].title}
                        </p>
                        <ul>
                            {footerLinks[0].links.map((link,index)=>{
                                return(
                                    <li key={index} className="py-3 flex justify-center md:justify-start">
                                        <Link href={link.url} className="text-[#E2E8F0] text-center md:text-left font-normal text-base leading-[22px] ">
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="w-full md:2/4 lg:w-1/4  flex flex-col">
                        <p className="font-medium text-base leading-[18px] text-center md:text-left mb-0 py-4 text-[#FFFFFF]">
                            {footerLinks[1].title}
                        </p>
                        <ul>
                            {footerLinks[1].links.map((link,index)=>{
                                return(
                                    <li key={index} className="py-3 flex justify-center md:justify-start">
                                        <Link href={link.url} className="text-[#E2E8F0] font-normal text-center md:text-left text-base leading-[22px] ">
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="w-full md:2/4 lg:w-1/4  flex flex-col">
                        <p className="font-medium text-base leading-[18px] text-center md:text-left mb-0 py-4 text-[#FFFFFF]">
                            {footerLinks[2].title}
                        </p>
                        <ul>
                            {footerLinks[2].links.map((link,index)=>{
                                return(
                                    <li key={index} className="py-3 flex justify-center md:justify-start">
                                        <Link href={link.url} className="text-[#E2E8F0] text-center md:text-left font-normal text-base leading-[22px] ">
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="w-full md:2/4 lg:w-1/4 flex flex-col">
                        <p className="font-medium text-base leading-[18px] text-center md:text-left mb-0 py-4 text-[#FFFFFF]">
                            Get the App
                        </p>
                        <div className="flex items-center md:items-start flex-col gap-y-2 pt-2"> 
                            <Link href="#">
                                <Image src={appStore} alt="App Store - Get the app" />
                            </Link>
                            <Link href="#">
                                <Image src={playStore} alt="Google Play - Get the app" />
                            </Link>
                        </div>
                        <div className="gap-y-2 flex flex-col items-center md:items-start">
                            <p className="pt-12 md:pt-[80px] pb-3 font-medium text-base text-[#E2E8F0] leading-[18px]">
                                Follow Us
                            </p>
                            <div className="gap-x-4 flex items-center justify-center md:justify-start">
                                <Link href="#">
                                    <Image src={youtube} alt="Youtube" />
                                </Link>
                                <Link href="#">
                                    <Image src={facebook} alt="Facebook" />
                                </Link>
                                <Link href="#">
                                    <Image src={twitter} alt="Twitter" />
                                </Link>
                                <Link href="#">
                                    <Image src={instagram} alt="Instagram" />
                                </Link>
                                <Link href="#">
                                    <Image src={linkedin} alt="Linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBar/>
        </footer>
    )
}