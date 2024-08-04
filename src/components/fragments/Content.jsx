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
            <div className="w-full h-screen border-2 border-yellow-500">
                <h1>View High 3</h1>
            </div>
            <div className="w-full h-screen border-2 border-green-500">
                <h1>View High 4</h1>
            </div>
        </div>
    )
}
