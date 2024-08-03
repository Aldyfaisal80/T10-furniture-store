import Content from "../fragments/Content";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayouts() {
    return (
        <div>
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
