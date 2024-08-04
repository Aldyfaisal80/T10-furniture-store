import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import vh3Chair0 from "../../../public/assets/images/display chair 0.png"
import vh3Chair1 from "../../../public/assets/images/display chair 1.png"
import vh3Chair2 from "../../../public/assets/images/display chair 2.png"

export default function Content() {
    return (
        <div>
            <div className="w-full h-screen border-2 border-red-500">
                <div className="font-Poppins border-red-500 border-2 whitespace flex flex-col gap-4">
                    <div className="text-font-color text-5xl font-bold">
                        <span>Modern <br /> Furniture</span>
                    </div>
                    <span>we combine enterior and exterior design <br /> service and ofthen provide them as a sigle <br /> solution
                    </span>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-primary-blue  px-4 py-2 rounded-lg">Start Now</button>
                        <button className="bg-primary-brown px-4 py-2 rounded-lg">Read More</button>
                    </div>
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
