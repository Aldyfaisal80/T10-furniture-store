import Footer from "../fragments/Footer";
import Hero from "../fragments/Hero";
import Navbar from "../fragments/Navbar";

export default function MainLayouts() {
    return (
        <div>
            <div className="w-full">
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
