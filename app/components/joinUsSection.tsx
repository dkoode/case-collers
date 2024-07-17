import ListContainer from "./ui/listContainer";
import ListItem from "./ui/listItem";
import Image from "next/image";
import Link from "next/link";
import videoImg from '../../public/images/video-img.webp'
import play from '../../public/images/icons/play.svg'

export default function JoinUsSection() {
    return(
        <section className="max-w-[1280px] mx-auto pt-4 px-4 pb-14 lg:py-40 lg:px-0">
            <div className="join-us bg-white flex flex-col lg:flex-row gap-y-8 lg:gap-x-[111px] rounded-[30px] items-center py-8 px-4 lg:px-20 lg:py-[73px]">
                <div className="flex flex-col gap-y-6">
                    <h2 className="font-bold text-[32px] leading-[35px] text-center lg:text-left lg:text-[56px] lg:leading-[61px] text-[#0F172A]">Why join us</h2>
                    <ListContainer>
                        <ListItem title="Est et in pharetra magna adipiscing ornare aliquam."/>
                        <ListItem title="Tellus arcu sed consequat ac velit ut eu blandit."/>
                        <ListItem title="Ullamcorper ornare in et egestas dolor orci."/>
                        <Link className="py-4 px-8 relative z-50 font-medium text-[20px] leading-[24px] max-w-max text-center mt-6 tracking-[0.5px] border-2 border-[#78350F] rounded-[8px] text-[#78350F]" href="/signup">
                            Sign up now
                        </Link>
                    </ListContainer>
                </div>
                <div className="relative">
                    <Image src={videoImg} alt="video-img" className="z-30 custom-shadow rounded-[18px] cursor-pointer"/>
                    <div className="absolute z-40 w-[144px] h-[144px] left-0 right-0 top-0 bottom-0 m-auto rounded-full bg-[#121619BF] flex items-center justify-center">
                        <Image src={play} alt="play" className="cursor-pointer relative right-[-5px]"/>
                    </div>
                    <div className="custom-arrowc w-[411px] h-[135px] lg:w-[666px] lg:h-[217px] z-10 bg-[#FDE68A] absolute -rotate-45  right-[-14px] lg:right-[unset] lg:left-[-95px] bottom-[30px] lg:top-0 lg:bottom-0 my-auto"></div>
                    <div className="lg:w-[90px] lg:h-[90px] w-[55px] h-[55px] left-[-22px] top-[25px] opacity-75 lg:top-[25px] lg:left-[-20px] rounded-[30px] absolute bg-[#B45309]"></div>
                    <div className="lg:w-[218px] lg:h-[218px] w-[135px] h-[135px] rounded-[50px] opacity-75 absolute bg-[#BE185D] z-[2] bottom-[-59px] right-[-55px] lg:right-[-118px] lg:bottom-[-109px]"></div>
                    <div className="absolute w-[46px] h-[46px]  lg:w-[74px] lg:h-[74px] rounded-[30px] opacity-75 bg-[#A21CAF] lg:bottom-[-44px] lg:right-[63px] bottom-[-19px] right-[56px]"></div>
                    <div className="absolute rounded-[50px] w-[50px] h-[50px] lg:w-[86px] lg:h-[86px] bg-[#15803D] bottom-[-18px] left-[43px] lg:bottom-[-36px] lg:left-[70px] opacity-75 z-50"></div>
                    <div className="absolute w-[37px] h-[37px] lg:w-[60px] lg:h-[60px] rounded-[50px] bg-[#0369A1] z-50 lg:top-[-28px] lg:right-[23px] top-[-7px] right-[32px] -translate-y-full opacity-75"></div>
                </div>
            </div>
        </section>
    )
}
