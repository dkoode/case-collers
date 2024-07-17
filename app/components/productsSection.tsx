import Link from "next/link";
import ProductBox from "./ui/productBox";

import productOne from '../../public/images/products/product-1.webp';
import productTwo from '../../public/images/products/product-2.webp';
import productThree from '../../public/images/products/product-3.webp';

export default function ProductsSection() {
    interface Product {
        image: string;
        image_alt: string;
        title: string;
        desc: string;
        id: number
    }
    const products : Product[] = [
        {
            image:productOne.src,
            image_alt: "image",
            title: "Title",
            desc:"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            id: 1
        },
        {
            image:productTwo.src,
            image_alt: "image",
            title: "Title",
            desc:"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            id: 1
        },
        {
            image:productThree.src,
            image_alt: "image",
            title: "Title",
            desc:"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            id: 1
        }
    ] 
    return(
        <section className="px-4 py-12 md:px-0 md:py-20 w-full bg-[#0F172A] border-b-[1px] border-t-[1px] border-t-[#E2E8F0] border-b-[#E2E8F0]">
            <div className="flex flex-col max-w-[1280px] mx-auto items-center md:flex-row md:justify-between gap-y-8">
                <h2 className="text-[32px] md:text-[56px] font-bold text-white">The best of the best</h2>
                <Link 
                    href={"/signup"}
                    className="font-bold text-white text-[24px] px-12 py-5 tracking-[0.5px] border-2 border-white rounded-[8px]"
                >
                    Sign up now
                </Link>
            </div>
            <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-12 items-center max-w-[1280px] mx-auto py-8 md:pt-20">

                <ProductBox img={products[0].image} id={products[0].id} title={products[0].title} desc={products[0].desc} alt={products[0].image_alt}>
                    <div className="opacity-75 bg-[#BE185D] w-[202px] h-[202px] md:w-[271px] md:h-[271px] absolute rounded-[50px] bottom-[-33px] left-[21px] md:left-[-35px] md:bottom-[25px] -z-10"></div>
                </ProductBox>

                <ProductBox img={products[1].image} id={products[1].id} title={products[1].title} desc={products[1].desc} alt={products[1].image_alt}>
                    <div className="absolute opacity-75 w-[120px] h-[120px] md:w-[161px] md:h-[161px] rounded-[50px] bg-[#0369A1] top-[140px] right-[-16px] md:left-[-21px] md:top-[-31px] -z-10"></div>
                    <div className="hidden md:block absolute opacity-75 w-[130px] h-[130px] rounded-[30px] bg-[#B45309] right-[-14px] bottom-[48px] -z-10"></div>
                </ProductBox>

                <ProductBox img={products[2].image} id={products[2].id} title={products[2].title} desc={products[2].desc} alt={products[2].image_alt}>
                    <div className="absolute hidden md:block opacity-75 w-[232px] h-[232px] rounded-[50px] bg-[#15803D] right-[-43px] top-[33px] -z-10"></div>
                    <div className="absolute opacity-75 w-[151px] h-[151px] md:w-[202px] md:h-[202px] rounded-[30px] bg-[#A21CAF] md:top-[unset] md:left-[unset] left-[-16px] top-[53px] md:right-[96px] md:bottom-[-24px] -z-10"></div>
                </ProductBox>

            </div>
        </section>
    )
}