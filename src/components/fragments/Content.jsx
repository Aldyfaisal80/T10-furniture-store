/* eslint-disable react/prop-types */
import HeaderImg from "../../../public/assets/images/header1.png"
import ArrowLeft from "../../../public/assets/images/arrow left.png"
import ArrowRight from "../../../public/assets/images/arrow right.png"
import vh2ChairDisplay from "../../../public/assets/images/chair 1.png"
import vh2ChairDisplay2 from "../../../public/assets/images/chair 2.png"
import vh3Chair0 from "../../../public/assets/images/display chair 0.png"
import vh3Chair1 from "../../../public/assets/images/display chair 1.png"
import vh3Chair2 from "../../../public/assets/images/display chair 2.png"

import MainProduct from "../../../public/assets/images/img footer.png"

import { FaTruckFast } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { PiChats } from "react-icons/pi";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import ButtonPrimary from "../elements/ButtonPrimary"
import ButtonCategory from "../elements/ButtonCategory"
import ProductCard from "./ProductCard"

export default function Content() {
    return (
        <div>
            <div className="w-full min-h-screen flex relative">
                <div className="font-Poppins border-2 whitespace flex flex-col gap-4">
                    <div className="text-font-color text-9xl font-bold leading-snug">
                        <span className="text-justify">Modern <br /> Furniture</span>
                    </div>
                    <span className="text-2xl leading-snug">we combine enterior and exterior design <br /> service and ofthen provide them as a sigle <br /> solution
                    </span>
                    <div className="flex gap-4 mt-4">
                        <ButtonPrimary text="Start Now" className={"bg-primary-blue"} />
                        <ButtonPrimary text="Read More" className={"bg-primary-brown"} />
                    </div> 
                </div>
                <img src={HeaderImg} className="absolute right-0 w-[1600px] h-[790px] mr-[-50px]" alt="" />
            </div>
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
            {/* 2vh */}
            <div className="w-full min-h-screen flex justify-center items-center flex-col gap-[20px] font-Poppins mt-[100px] mb-[100px]">
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
            <div className="flex flex-col gap-10 w-full min-h-screen">
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
                <div className="flex flex-col w-full justify-center items-center text-font-color">
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
                    <div>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="w-full p-[120px]">
                <div className="w-full flex justify-center items-center">
                    <div className="w-[45%] flex flex-col justify-center items-center relative">
                        <div className="flex justify-center items-center w-[450px] h-[450px] rounded-full bg-primary-brown mt-[-20px]">
                        </div>
                        <img src={MainProduct} alt="" className="w-[590px] h-[590px] absolute top-[-50px]" />
                    </div>
                    <div className="w-[55%] flex flex-col gap-10 p-16">
                        <h1 className="text-5xl text-font-color font-bold">We Are The Bigest <br /> Furniture Brands</h1>
                        <p className="text-lg text-font-color font-semibold">Over the years we have always been on top of <br /> the furniture industries arround the world, that why <br /> everyone believes in the qualityof our products </p>
                        <button className="w-[200px] h-[50px] bg-primary-blue font-bold rounded-lg text-font-color">See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
