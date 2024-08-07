import HeaderImg from "../../public/assets/images/header1.png"
import ButtonPrimary from "../components/elements/ButtonPrimary"
export default function SectionOne() {
    return (
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
    )
}
