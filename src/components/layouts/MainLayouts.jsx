/* eslint-disable react/prop-types */
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayouts({ children }) {
    return (
        <div className="bg-primary-bg">
            <div className="w-full px-[50px]">
                <Navbar />
            </div>
            <div className="w-full px-[50px]">
                {children}
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}
