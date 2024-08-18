import { FaCircleDollarToSlot, FaTruckFast } from "react-icons/fa6"
import { PiChats } from "react-icons/pi"
import ArrowLeft from "../../../../public/assets/images/arrow left.png"
import ButtonPrimary from "../../../components/elements/ButtonPrimary";
import vh2ChairDisplay from "../../../../public/assets/images/chair 1.png"
import vh2ChairDisplay2 from "../../../../public/assets/images/chair 2.png"
import ArrowRight from "../../../../public/assets/images/arrow right.png"

export default function Section2() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center gap-20 w-full text-font-color">
                <div><img src={ArrowRight} className="w-[150px]" alt="" /></div>
                <span className="text-4xl font-bold">Hot Deals For You</span>
                <div><img src={ArrowLeft} className="w-[150px]" alt="" /></div>
            </div>
            <div className="flex items-center justify-between bg-bg-card px-36 py-10 mt-[100px] rounded-xl shadow-2xl">
                <div className="flex flex-col gap-4">
                    <FaTruckFast size={100} className="text-icon-color" />
                    <h1 className="text-3xl text-font-color font-bold">Free Shooping</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
                <div className="flex flex-col gap-4">
                    <FaCircleDollarToSlot size={100} className="text-icon-color" />
                    <h1 className="text-3xl text-font-color font-bold">Save Money</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
                <div className="flex flex-col gap-4">
                    <PiChats size={100} className="text-icon-color" />
                    <h1 className="text-3xl text-font-color font-bold">Contact With Us</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-[20px] font-Poppins mt-[200px] mb-[200px]">
                <div className="w-full flex justify-center">
                    <h1 className="text-font-color font-bold text-5xl">This Week Featured Product</h1>
                </div>
                <div className="w-[70%] px-[50px] bg-[#F0DAC5] rounded-[20px] text-[1.4rem] tracking-tighter ">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-[60%] pl-10 flex flex-col gap-[10px]">
                            <p className="text-font-color font-bold">
                                Being able to sit back and relax in your favourite armchair is
                                truly one of the greatest feelings in life. That&apos;s why we&apos;ve
                                created a stunning range of lovingly handmade luxury armchairs,
                                using only materials of the finest quality, to ensure you have
                                the best seat in the house.
                            </p>
                            <ButtonPrimary text="Add To Cart" className={"bg-primary-blue "} />
                        </div>
                        <div className="w-[30%] h-[450px] relative rounded-b-[20px] rounded-t-[300px] mt-[-50px] mr-[-80px] bg-[#D7AC82]">
                            <img src={vh2ChairDisplay} alt="" className="w-[320px] h-[320px] absolute bottom-0 left-[-40px]" />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-[-100px] ">
                        <div className="w-[30%] h-[450px] relative rounded-b-[20px] rounded-t-[300px] ml-[-80px] bg-[#D7AC82] bottom-[-50px]">
                            <img src={vh2ChairDisplay2} alt="" className="w-[400px] h-[400px] absolute bottom-[-20px] right-[-120px]" />
                        </div>
                        <div className="w-[60%] flex flex-col gap-[10px]">
                            <p className="text-font-color font-bold">
                                As in the best seat in the house. Combining comfort and
                                creativity, our smashing range of armchairs features design to
                                suit any style. Perhaps you&apos;re looking for a mid-century
                                masterpiece.
                            </p>
                            <ButtonPrimary text="Add To Cart" className={"bg-primary-brown "} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
