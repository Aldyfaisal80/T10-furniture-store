import ButtonPrimary from "../../../components/elements/ButtonPrimary";
import HeaderImg from "../../../../public/assets/images/header.png";

export default function Section1() {
  return (
    <div className="flex justify-between">
      <div className="font-Poppins border-2 whitespace flex flex-col mt-20 gap-4">
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
      <div>
        <img src={HeaderImg} className="w-[1700px] mt-20" alt="" />
      </div>
    </div>

  )
}
