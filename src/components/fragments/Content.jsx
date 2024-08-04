import HeaderImg from "../../../public/assets/images/header1.png"
import ArrowLeft from "../../../public/assets/images/arrow left.png"
import ArrowRight from "../../../public/assets/images/arrow right.png"

import { FaTruckFast } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { PiChats } from "react-icons/pi";

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
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <FaTruckFast size={100} className="text-icon-color"/>
                    <h1 className="text-3xl text-font-color font-bold">Free Shooping</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
                <div className="flex flex-col">
                    <FaTruckFast size={100} className="text-icon-color"/>
                    <h1 className="text-3xl text-font-color font-bold">Free Shooping</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
                <div className="flex flex-col">
                    <FaTruckFast size={100} className="text-icon-color"/>
                    <h1 className="text-3xl text-font-color font-bold">Free Shooping</h1>
                    <span>we combine interior and <br /> exterior design service</span>
                </div>
            </div>
            <div className="w-full h-screen border-2 border-blue-500">
                <h1>View High 2</h1>
            </div>
            <div className="w-full h-screen border-2 border-yellow-500">
                <h1>View High 3</h1>
            </div>
            <div className="w-full h-screen border-2 border-green-500">
                <h1>View High 4</h1>
            </div>
        </div>
    )
}
