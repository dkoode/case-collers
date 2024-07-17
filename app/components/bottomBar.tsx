import Link from "next/link";
import Image from "next/image";

import lang from '../../public/images/icons/lang-icon.svg'

export default function BottomBar(){
    return(
        <div className="flex flex-col items-center gap-y-6 md:flex-row max-w-[1280px] mx-auto md:items-center md:justify-between md:py-6 py-12">
            <p className="text-base font-normal leading-[22px] text-center md:text-left text-[#E2E8F0]">
                Collers @ 2023. All rights reserved.
            </p>
            <ul className="flex items-center gap-x-8 ">
                <li className="py-3">
                    <Link className="text-base leading-[22px] font-normal text-[#E2E8F0]" href={"/terms"}>
                        Terms
                    </Link>
                </li>
                <li className="py-3">
                    <Link className="text-base leading-[22px] font-normal  text-[#E2E8F0]" href={"/privacy"}>
                        Privacy
                    </Link>
                </li>
                <li className="py-3">
                    <Link className="text-base leading-[22px] font-normal  text-[#E2E8F0]" href={"/contact"}>
                        Contact
                    </Link>
                </li>
                <li className="py-3">
                    <button className="text-base leading-[22px] font-normal flex items-center gap-2  text-[#E2E8F0]">
                        <Image src={lang} alt="lang-icon" />
                        EN
                    </button>
                </li>
            </ul>
        </div>
    )
}