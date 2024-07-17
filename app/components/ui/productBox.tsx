import Image from "next/image"
import Link from "next/link"

import cartIcon from '../../../public/images/icons/cart-icon.svg'
export default function ProductBox({children, img, title, desc, alt, id}:
    {children: React.ReactNode,id:number, img:string, title:string, desc:string, alt:string}) {
    return(
        <div className="w-full md:w-1/3 relative product-shadow z-10">
            <div className=" border-[1px] border-[#0F172A] rounded-[10px] overflow-hidden bg-[#0F172A]">
                <Image src={img} alt={alt} width={394} height={220}/>
                <div className="p-8 pb-0 flex flex-col gap-y-4">
                    <h6 className="leading-[26px] text-[24px] text-white font-bold">{title}</h6>
                    <p className="mb-0 font-normal text-white text-[18px]">
                        {desc}
                    </p>
                </div>
                <div className="w-full p-8 rounded-bl-[10px] rounded-br-[10px]">
                    <Link className="flex items-center w-full border-2 border-white rounded-[8px] py-4 justify-center" href={`/buy/${id}`}>
                        <Image src={cartIcon} alt="cart-icon" width={24} height={24}/>
                        <span className="px-4 font-medium leading-[26px] text-[20px] text-white tracking-[0.5px]">Buy Now</span>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}