'use client'
import { useState } from 'react';
import Image from 'next/image';
import TabsContainer from "./ui/tabsContainer";
import TabsMenuItem from "./ui/tabsMenu";
import TabsItem from "./ui/tabsItem";

import tabsBtm from '../../public/images/tabs/tabs-btm.svg'

//Data tabs menu images
import iconOne from '../../public/images/icons/tab-1-icon.svg';
import iconTwo from '../../public/images/icons/tab-2-icon.svg';
import iconThree from '../../public/images/icons/tab-3-icon.svg';
import iconFour from '../../public/images/icons/tab-4-icon.svg';
import iconFive from '../../public/images/icons/tab-5-icon.svg';
import iconSix from '../../public/images/icons/tab-6-icon.svg';

//Data tabs items images
import screenOne from '../../public/images/tabs/screen-1.webp';
import screenTwo from '../../public/images/tabs/screen-2.webp';
import screenThree from '../../public/images/tabs/screen-3.webp';

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState<number>(1);

    const tabsMenu = [
        {
            id: 1,
            title: "Bibendum tellus",
            icon: iconOne.src,
            width: 24,
            height: 24
        },
        {
            id: 2,
            title: "Cras eget",
            icon: iconTwo.src,
            width: 24,
            height: 24
        },
        {
            id: 3,
            title: "Dolor pharetra",
            icon: iconThree.src,
            width: 24,
            height: 24
        },
        {
            id: 4,
            title: "Amet, fringilla",
            icon: iconFour.src,
            width: 24,
            height: 24
        },
        {
            id: 5,
            title: "Amet nibh",
            icon: iconFive.src,
            width: 24,
            height: 24
        },
        {
            id: 6,
            title: "Sed velit",
            icon: iconSix.src,
            width: 24,
            height: 24
        }
    ];

    const tabItems = [
        {
            id: 1,
            img_one: screenOne.src,
            img_one_height: screenOne.height,
            img_one_width: screenOne.width,
            img_two: screenTwo.src,
            img_two_height: screenTwo.height,
            img_two_width: screenTwo.width,
            img_three: screenThree.src,
            img_three_height: screenThree.height,
            img_three_width: screenThree.width
        },
        {
            id: 2,
            img_one: screenOne.src,
            img_one_height: screenOne.height,
            img_one_width: screenOne.width,
            img_two: screenTwo.src,
            img_two_height: screenTwo.height,
            img_two_width: screenTwo.width
        },
        {
            id: 3,
            img_one: screenOne.src,
            img_one_height: screenOne.height,
            img_one_width: screenOne.width
        },
        {
            id: 4,
            img_one: screenOne.src,
            img_one_height: screenOne.height,
            img_one_width: screenOne.width
        },
        {
            id: 5,
            img_one: screenOne.src,
            img_one_height: screenOne.height,
            img_one_width: screenOne.width
        },
        {
            id: 6,
            img_one: screenOne.src,
            img_one_height: screenOne.height,
            img_one_width: screenOne.width
        }
    ];

    return (
        <section className='relative pb-[152px] md:pb-[233px]'>
            <div className="relative  pt-12 px-4  md:pt-20 max-w-[1280px] mx-auto">
                <div className="flex items-center flex-col md:items-start gap-y-8 pb-8 md:pb-20">
                    <h2 className="font-bold text-[32px] leading-[35px] md:text-[56px] md:leading-[62px] text-center md:text-left text-[#0F172A]">
                        Grow your collection
                    </h2>
                    <p className="mb-0 font-normal text-[#0F172A] max-w-[1200px] text-center md:text-left text-base md:text-[18px] md:leading-[29px] ">
                        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                    </p>
                </div>
                <TabsContainer>
                    <div className="flex md:flex-col gap-x-4 md:gap-y-4 custom-tabs-menu pb-8 md:pb-0">
                        {tabsMenu.map((item) => (
                            <TabsMenuItem 
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                icon={item.icon} 
                                width={item.width} 
                                height={item.height} 
                                isActive={activeTab === item.id}
                                onClick={() => setActiveTab(item.id)}
                            />
                        ))}
                    </div>
                    {tabItems.map((item) => (
                        activeTab === item.id && (
                            <TabsItem
                                key={item.id}
                                id={item.id}
                                imgOne={item.img_one}
                                imgOneWidth={item.img_one_width}
                                imgOneHeight={item.img_one_height}
                                imgTwo={item.img_two}
                                imgTwoWidth={item.img_two_width}
                                imgTwoHeight={item.img_two_height}
                                imgThree={item.img_three}
                                imgThreeWidth={item.img_three_width}
                                imgThreeHeight={item.img_three_height}
                            />
                        )
                    ))}
                </TabsContainer>
            </div>
            <Image src={tabsBtm} alt='Tabs Bottom' className="tabs-btm w-full absolute bottom-0 right-0 z-[-1]" />
        </section>
    );
}
