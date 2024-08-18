import MainLayouts from "../components/layouts/MainLayouts";
import Section1 from "./sections/home/Section1";
import Section2 from "./sections/home/Section2";
import Section3 from "./sections/home/Section3";
import Section4 from "./sections/home/Section4";

export default function Home() {
    return (
        <MainLayouts>
            <div className="min-h-screen w-full">
                <Section1 />
            </div>
            <div className="min-h-screen w-full">
                <Section2 />
            </div>
            <div className="min-h-screen w-full">
                <Section3 />
            </div>
            <div className="min-h-screen w-full">
                <Section4 />
            </div>
        </MainLayouts>
    )
}
