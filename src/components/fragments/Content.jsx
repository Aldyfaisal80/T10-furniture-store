import HeaderImg from "../../../public/assets/images/header1.png"
import ArrowLeft from "../../../public/assets/images/arrow left.png"
import ArrowRight from "../../../public/assets/images/arrow right.png"
import vh3Chair0 from "../../../public/assets/images/display chair 0.png"
import vh3Chair1 from "../../../public/assets/images/display chair 1.png"
import vh3Chair2 from "../../../public/assets/images/display chair 2.png"


import { FaTruckFast } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { PiChats } from "react-icons/pi";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function Content() {
    return (
        <div>
            <div className="w-full h-screen border-2 border-red-500 flex relative">
                <div className="font-Poppins border-2 whitespace flex flex-col gap-4">
                    <div className="text-font-color text-9xl font-bold leading-snug">
                        <span className="text-justify">Modern <br /> Furniture</span>
                    </div>
                    <span className="text-2xl leading-snug">we combine enterior and exterior design <br /> service and ofthen provide them as a sigle <br /> solution
                    </span>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-primary-blue  px-4 py-2 rounded-lg">Start Now</button>
                        <button className="bg-primary-brown px-4 py-2 rounded-lg">Read More</button>
                    </div>
                </div>
                <img src={HeaderImg} className="absolute right-0 mr-[-54px] w-[1500px]" alt="" />
            </div>
            <div className="flex items-center justify-center gap-20 w-full text-font-color">
                <div><img src={ArrowRight} className="w-[400px]" alt="" /></div>
                <span className="text-8xl">Hot Delas For You</span>
                <div><img src={ArrowLeft} className="w-[400px]" alt="" /></div>
            </div>
            <div className="flex items-center justify-between bg-primary-brown">
                <div className="flex flex-col">
                    <FaTruckFast size={100} className="text-icon-color"/>
                    <h1 className="text-3xl text-font-color font-bold">Free Shooping</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
                <div className="flex flex-col">
                    <FaCircleDollarToSlot size={100} className="text-icon-color"/>
                    <h1 className="text-3xl text-font-color font-bold">Save Money</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
                <div className="flex flex-col">
                    <PiChats size={100} className="text-icon-color"/>
                    <h1 className="text-3xl text-font-color font-bold">Contact With Us</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
            </div>
            <div className="w-full h-screen border-2 border-blue-500">
                <h1>View High 2</h1>
            </div>
            <div className="flex flex-col gap-10 w-full min-h-screen border-2 py-4 border-yellow-500">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center items-center gap-6 text-font-color">
                        <CgArrowLongRight className="text-5xl" />
                        <h1 className="text-4xl font-bold ">Wodden Sofa Sets</h1>
                        <CgArrowLongLeft className="text-5xl" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="w-[300px]">
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
                        <div className="w-[300px]">
                            <img src={vh3Chair2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full text-font-color">
                    <div className="flex flex-col w-full justify-center items-center">
                        <h1 className="text-4xl font-bold py-[60px]">A Huge Collection Of Furniture</h1>
                        <div className="flex justify-center items-center gap-4 text-[1.3rem] font-semibold">
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2">All Collection</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2">Office</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2">Bedroom</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2">Sofa</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2">Chair</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2">More</span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="w-full h-screen border-2 border-green-500">
                <h1>View High 4</h1>
            </div>
        </div>
    )
}
