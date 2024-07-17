import Image from "next/image"

import globeImg from "../../public/images/chart.webp"
import shoe from '../../public/images/products/globe-shoe.webp'
export default function GlobeSection(){
    return(
        <section className="relative h-[717px] bg-[#78350F] flex items-center justify-center">
            <div className="relative w-full h-full md:w-[1049px] z-40">
                <Image src={globeImg} alt="globe-img" className="absolute top-9 left-[21px] min-w-[1049px] md:top-0 md:left-0 md:-right-0 md:bottom-0 m-auto"/>
                <div className="absolute z-20 top-[5px] left-[63px] md:top-[15px] md:left-[24px]">
                    <Image src={shoe} alt="shoe-img" className="relative z-20 rounded-[10px] custom-globe-shadow"/>
                    <div className="card-footer-c rounded-[5px] bg-[#E2E8F0] pt-4 px-4 pb-2 relative -top-2 max-w-[250px] mx-auto">
                        <p className="mb-0 relative z-20 font-normal text-[14px] leading-[20px] max-w-[218px]">
                            Emma Simpson collected one pair of <span className="font-medium">Cool Shoes</span>.
                        </p>
                        <div className="z-[-1] w-[32px] h-[32px] border-[3px] bg-[#D9F99D] border-[#A3E635] rounded-full absolute bottom-[-21px] left-0 right-0 mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] flex items-center justify-center flex-col gap-y-2 m-auto absolute top-0 left-0 bottom-0 right-0 z-50">
                <h2 className="font-bold text-[48px] leading-[53px] md:text-[96px] md:leading-[106px] text-center pt-[9px]  text-[#FFFBEB]">
                    11,658,467
                </h2>
                <h5 className="font-bold text-center text-[32px] leading-[35px] md:text-[56px] md:leading-[62px] text-[#FFFBEB] ">
                    Shoes Collected
                </h5>
            </div>
        </section>
    )
}