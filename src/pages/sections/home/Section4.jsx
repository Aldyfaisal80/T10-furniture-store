import ProductCard from "../../../components/fragments/ProductCard";
import MainProduct from "../../../../public/assets/images/img footer.png"

export default function Section4() {
    return (
        <div>
            <div className="flex flex-col w-full justify-center items-center text-font-color">
                <div>
                    <ProductCard />
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
