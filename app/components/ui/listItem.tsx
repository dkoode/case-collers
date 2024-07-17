import Image from "next/image"
import tickIcon from '../../../public/images/icons/tick-icon.svg'
export default function ListItem({title}: {title:string}){
    return(
        <li className="flex items-start gap-x-[6px]">
            <Image className="relative md:top-[5px]" src={tickIcon} alt="tick-icon"/>
            <p className="text-base text-wrap md:text-nowrap leading-[22px] font-normal md:text-[20px] md:leading-[36px] text-[#0F172A]">
                {title}
            </p>                    
        </li>
    )
}