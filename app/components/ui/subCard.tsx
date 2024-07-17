import Image from "next/image"
export default function SubCard({image,title,desc, width, height}: {image:string,title:string,desc:string, width:number, height:number}) {
    return (
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-y-4">
            <Image className="object-cover" src={image} width={width} height={height} alt="Icons - Collers"/>
            <h3 className="font-medium text-center md:text-left text-[20px] leading-[22px] text-[#0F172A]">{title}</h3>
            <p className="font-normal text-center md:text-left leading-[24px] text-[18px] text-[#0F172A] md:leading-[28px]">{desc}</p>
        </div>
    )
}   