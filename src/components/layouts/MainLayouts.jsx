import Content from "../fragments/Content";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayouts() {
    return (
        <div className="px-[50px] border-2 bg-primary-bg">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="w-full">
                <Content />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}
