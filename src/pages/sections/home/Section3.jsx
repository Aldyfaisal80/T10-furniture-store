import vh3Chair0 from "../../../../public/assets/images/display chair 0.png"
import vh3Chair1 from "../../../../public/assets/images/display chair 1.png"
import vh3Chair2 from "../../../../public/assets/images/display chair 2.png"

import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import ButtonCategory from "../../../components/elements/ButtonCategory";

export default function Section3() {
    return (
        <div className="flex flex-col gap-32">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center items-center gap-6 text-font-color">
                        <CgArrowLongRight className="text-5xl" />
                        <h1 className="text-4xl font-bold ">Wodden Sofa Sets</h1>
                        <CgArrowLongLeft className="text-5xl" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="w-[250px]">
                            <img src={vh3Chair0} alt="" />
                        </div>
                        <span className="flex justify-center items-center w-[80px] h-[80px] bg-primary-brown text-font-color text-4xl font-bold rounded-full">
                            <GoChevronLeft />
                        </span>
                        <div className="w-[480px]">
                            <img src={vh3Chair1} alt="" />
                        </div>
                        <span className="flex justify-center items-center w-[80px] h-[80px] bg-primary-brown text-font-color text-4xl font-bold rounded-full">
                            <GoChevronRight />
                        </span>
                        <div className="w-[250px]">
                            <img src={vh3Chair2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                    <h1 className="text-4xl font-bold py-[60px]">A Huge Collection Of Furniture</h1>
                    <div className="flex justify-center items-center gap-4 text-[1.3rem] font-semibold">
                        <ButtonCategory text="All Categories" />
                        <ButtonCategory text="Office" />
                        <ButtonCategory text="Bedroom" />
                        <ButtonCategory text="Sofa" />
                        <ButtonCategory text="Chair" />
                        <ButtonCategory text="More" />
                    </div>
                </div>
        </div>
    )
}
