import Content from "../fragments/Content";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayouts() {
    return (
        <div className="bg-primary-bg">
            <div className="w-full px-[50px]">
                <Navbar />
            </div>
            <div className="w-full px-[50px]">
                <Content />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}
