import Image from "next/image"

import brandOne from '../../../public/images/brands/brand-1.png'
import profileOne from '../../../public/images/brands/profile-1.png'

interface CarouselItemProps {
    brandImg: string
    desc: string
    personImg: string
    personName: string
    personTitle: string
    imgWidth: number
    imgHeight: number
}
export default function CarouselItem({brandImg, desc, personImg, personName, personTitle, imgWidth, imgHeight} : CarouselItemProps) {
    return(
        <div className="p-6 md:p-8 min-h-[296px] md:min-h-[430px] card-shadow rounded-[20px] bg-white">
            <div className="py-4">
                <Image width={imgWidth} height={imgHeight} src={brandImg} alt="Brand logo"/>
            </div>
            <p className="mb-0 font-normal text-base leading-[22px] md:text-[24px] md:leading-[38px] text-black pt-2 md:pt-4">
                {desc}
            </p>
            <div className="mt-2 md:mt-4 pt-4 flex items-center gap-x-4">
                <Image width={64} height={64} src={personImg} alt="Person image"/>
                <div className="flex flex-col">
                    <span className="inline-block text-[18px] text-black font-normal leading-[29px]">
                        {personName}
                    </span>
                    <span className="text-base text-[#475569] leading-[22px] font-normal">
                        {personTitle}
                    </span>
                </div>
            </div>
        </div>
    )
}