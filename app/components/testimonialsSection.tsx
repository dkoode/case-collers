'use client'
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from "react"

import next from '../../public/images/icons/next.svg'
import prev from '../../public/images/icons/prev.svg'
import CarouselItem from "./ui/carouselItem"

/*Data images*/
import shells from '../../public/images/brands/brand-1.png'
import shellsPerson from '../../public/images/brands/profile-1.png'
import artvenue from '../../public/images/brands/artvenue.png'
import artvenuePerson from '../../public/images/brands/profile-2.png'
import zoomerr from '../../public/images/brands/zoomerr.png'
import zoomerrPerson from '../../public/images/brands/profile-3.png'

interface Testimonial {
    id: number
    img: string
    desc: string
    person_img: string
    img_width: number
    img_height: number
    person_name: string
    person_title: string
}
export default function TestimonialsSection() {
    const testimonials : Testimonial[] = [
        {
            id:1,
            img:shells.src,
            desc:"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            person_img:shellsPerson.src,
            img_width: 124,
            img_height: 32,
            person_name:"Hellena John",
            person_title:"Co-founder"
        },
        {
            id:2,
            img:artvenue.src,
            desc:"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            person_img:artvenuePerson.src,
            img_width: 166,
            img_height: 32,
            person_name:"David Oshodi",
            person_title:"Manager"
        },
        {
            id:3,
            img:zoomerr.src,
            desc:"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            person_img:zoomerrPerson.src,
            img_width: 133,
            img_height: 32,
            person_name:"Hellen Jummy",
            person_title:"Team Lead"
        },
        {
            id:4,
            img:shells.src,
            desc:"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            person_img:shellsPerson.src,
            img_width: 124,
            img_height: 32,
            person_name:"Hellena John",
            person_title:"Co-founder"
        },
        {
            id:5,
            img:artvenue.src,
            desc:"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            person_img:artvenuePerson.src,
            img_width: 166,
            img_height: 32,
            person_name:"David Oshodi",
            person_title:"Manager"
        },
        {
            id:6,
            img:zoomerr.src,
            desc:"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            person_img:zoomerrPerson.src,
            img_width: 133,
            img_height: 32,
            person_name:"Hellen Jummy",
            person_title:"Team Lead"
        },
        {
            id:7,
            img:shells.src,
            desc:"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            person_img:shellsPerson.src,
            img_width: 124,
            img_height: 32,
            person_name:"Hellena John",
            person_title:"Co-founder"
        },
        {
            id:8,
            img:artvenue.src,
            desc:"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            person_img:artvenuePerson.src,
            img_width: 166,
            img_height: 32,
            person_name:"David Oshodi",
            person_title:"Manager"
        },
        {
            id:9,
            img:zoomerr.src,
            desc:"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            person_img:zoomerrPerson.src,
            img_width: 133,
            img_height: 32,
            person_name:"Hellen Jummy",
            person_title:"Team Lead"
        },
    ]
    const [emblaRef,emblaApi] = useEmblaCarousel({
        loop: true,
    })
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    //NOTES:: I've decided to use a carousel library instead of implementing it myself because if i make it myself it will take a lot of time.
    // So im using a lighweight library called Embla Carousel.
    return(
        <section className="py-12 md:py-20 md:px-0 flex flex-col gap-8 md:gap-y-20">
            <div className="flex justify-center md:justify-between items-center max-w-[1280px] w-full mx-auto px-4">
                <h2 className="font-bold text-[32px] leading-[35px] text-center md:text-left text-[#0F172A] md:text-[56px] md:leading-[62px]">
                    Because they love us
                </h2>
                <div className="hidden md:flex items-center gap-x-6">
                    <button
                    onClick={scrollPrev}
                    className="h-[48px] w-[48px] flex items-center justify-center btn-shadow border-2 border-[#78350F] rounded-full">
                        <Image src={prev} alt="Previous testimonial"/>
                    </button>
                    <button 
                    onClick={scrollNext}
                    className="h-[48px] w-[48px] flex items-center justify-center btn-shadow border-2 border-[#78350F] rounded-full">
                        <Image src={next} alt="Next testimonial"/>
                    </button>
                </div>
            </div>
            <div className="relative">
                <div className="w-full max-h-[277px] md:max-h-[421px] absolute max-w-full z-[-1] left-0 top-[-16px] md:top-[-40px] h-full bg-[#FDE68A] md:max-w-[1360px] md:right-0 md:mx-auto"></div>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {testimonials.map(testimonial => (
                            <div className="embla__slide" key={testimonial.id }>
                                <CarouselItem
                                key={ testimonial.id }
                                brandImg={testimonial.img }
                                desc={ testimonial.desc }
                                personImg={ testimonial.person_img }
                                imgWidth={ testimonial.img_width }
                                imgHeight={ testimonial.img_height }
                                personName={ testimonial.person_name }
                                personTitle={ testimonial.person_title }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}