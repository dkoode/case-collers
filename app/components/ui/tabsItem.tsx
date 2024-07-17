import Image from "next/image";

interface TabsItemProps {
    id: number;
    imgOne: string;
    imgOneWidth: number;
    imgOneHeight: number;
    imgTwo?: string;
    imgTwoWidth?: number;
    imgTwoHeight?: number;
    imgThree?: string;
    imgThreeWidth?: number;
    imgThreeHeight?: number;
}

export default function TabsItem({ id, imgOne, imgTwo, imgThree, imgOneWidth, imgTwoWidth, imgThreeWidth, imgOneHeight, imgTwoHeight, imgThreeHeight }: TabsItemProps) {
    return (
        <div className="relative">
            <Image className="relative z-10 img-one custom-img-shadow" width={imgOneWidth} height={imgOneHeight} src={imgOne} alt="Tabs Image - Collers" />
            {imgTwo && <Image className="absolute img-two z-20 left-[36px] top-[57px] md:top-[105px] md:left-[94px] custom-img-shadow" width={imgTwoWidth} height={imgTwoHeight} src={imgTwo} alt="Tabs Image - Collers" />}
            {imgThree && <Image className="absolute z-30 img-three custom-img-shadow right-[8px] bottom-[-25px] md:right-[-185px] md:bottom-[-37px]" width={imgThreeWidth} height={imgThreeHeight} src={imgThree} alt="Tabs Image - Collers" />}
        </div>
    );
}
