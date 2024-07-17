import Image from 'next/image';
import SubCard from './ui/subCard';

import iconOne from '../../public/images/icons/icon-1.webp';
import iconTwo from '../../public/images/icons/icon-2.webp';
import iconThree from '../../public/images/icons/icon-3.webp';
import subBtm from '../../public/images/sub-btm.webp'

interface Item {
    image: string;
    title: string;
    desc: string;
    img_width: number;
    img_height: number;
}

export default function SubHeroSection(){
    const items : Item[] = [
        {
            image:iconOne.src,
            img_width: 89,
            img_height: 64,
            title:"Nibh viverra",
            desc:"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        },
        {
            image:iconTwo.src,
            title:"Cursus amet",
            img_width: 64,
            img_height: 64,
            desc:"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        },
        {
            image:iconThree.src,
            title:"Ipsum fermentum",
            img_width: 87,
            img_height: 64,
            desc:"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        }
    ]
    return(
        <section className=" bg-[#FEF3C7] md:bg-transparent py-12 px-4 md:px-0 md:py-20 relative">
            <div className='max-w-[1280px] mx-auto flex flex-col gap-y-8 md:gap-x-20 md:flex-row'>
                {items.map((item) => (
                    <SubCard width={item.img_width} height={item.img_height} image={item.image} title={item.title} desc={item.desc}/>
                ))}
            </div>
            <Image className="absolute btm-rect bottom-0 z-[-1] right-0" src={subBtm} alt="sub-btm"/>
        </section>
    )
}