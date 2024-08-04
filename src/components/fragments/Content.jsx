import HeaderImg from "../../../public/assets/images/header1.png"
import ArrowLeft from "../../../public/assets/images/arrow left.png"
import ArrowRight from "../../../public/assets/images/arrow right.png"
import vh2ChairDisplay from "../../../public/assets/images/chair 1.png"
import vh2ChairDisplay2 from "../../../public/assets/images/chair 2.png"
import vh3Chair0 from "../../../public/assets/images/display chair 0.png"
import vh3Chair1 from "../../../public/assets/images/display chair 1.png"
import vh3Chair2 from "../../../public/assets/images/display chair 2.png"
import vh3Product1 from "../../../public/assets/images/card-product1.png"
import vh3Product2 from "../../../public/assets/images/card-product2.png"
import vh3Product3 from "../../../public/assets/images/card-product3.png"
import vh3Product4 from "../../../public/assets/images/card-product4.png"
import vh3Product5 from "../../../public/assets/images/card-product5.png"
import vh3Product6 from "../../../public/assets/images/card-product6.png"
import vh3Product7 from "../../../public/assets/images/card-product7.png"
import vh3Product8 from "../../../public/assets/images/card-product8.png"


import { FaTruckFast } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { PiChats } from "react-icons/pi";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BsPlusCircleFill } from "react-icons/bs";

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
                        <button className="bg-primary-blue  px-4 py-2 rounded-lg">Start Now</button>
                        <button className="bg-primary-brown px-4 py-2 rounded-lg">Read More</button>
                    </div>
                </div>
                <img src={HeaderImg} className="absolute right-0 w-[1300px]" alt="" />
            </div>
            <div className="flex items-center justify-center gap-20 w-full text-font-color">
                <div><img src={ArrowRight} className="w-[150px]" alt="" /></div>
                <span className="text-4xl font-bold">Hot Deals For You</span>
                <div><img src={ArrowLeft} className="w-[150px]" alt="" /></div>
            </div>
            <div className="flex items-center justify-between bg-bg-card px-36 py-10 rounded-xl shadow-2xl">
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
            <div className="w-full min-h-screen flex justify-center items-center flex-col gap-[20px] font-Poppins mb-[100px]">
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

                            <button className="w-[20%] h-[35px] rounded-[10px] bg-primary-blue text-[1.1rem]  flex items-center justify-center"><a href="#">Add To Cart</a></button>
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

                            <button className="w-[20%] h-[35px] rounded-[10px] bg-primary-brown text-[1.1rem] text-font-color flex items-center justify-center"><a href="#">Add To Cart</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 w-full min-h-screen border-2 border-yellow-500">
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
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2 hover:bg-hover-color">All Collection</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2 hover:bg-hover-color">Office</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2 hover:bg-hover-color">Bedroom</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2 hover:bg-hover-color">Sofa</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2 hover:bg-hover-color">Chair</span>
                            <span className="w-[200px] flex justify-center items-center bg-primary-brown rounded-full p-2 hover:bg-hover-color">More</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-[1600px] justify-between gap-[30px] items-center py-[60px]">
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product1} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product2} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product3} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product4} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product5} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product6} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product7} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
                            <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
                                <img src={vh3Product8} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
                                <div>
                                    <h1>Long Chair</h1>
                                    <span>$100.00</span>
                                </div>
                                <BsPlusCircleFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen border-2 border-green-500">
                <h1>View High 4</h1>
            </div>
        </div>
    )
}
