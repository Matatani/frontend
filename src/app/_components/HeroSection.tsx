const HeroSection = () => {
    return(
            <section className="w-full min-h-screen grid grid-cols-2 gap-16 px-4 pt-12">
                <div className="flex flex-col justify-center items-center relative bottom-32">
                    <div className={"text-left max-w-2xl"}>
                        <h1 className="text-5xl font-bold font-nunito text-gray-800">
                            Identify Paddy Leaf Diseases in Seconds
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 font-inter">
                            Simply upload a photo of your rice leaf and let our AI‑powered model diagnose the disease—no signup required. Get instant insights and treatment recommendations to keep your crop healthy.
                        </p>
                    </div>
                </div>
                <div className={"flex justify-center items-center relative bottom-32"}>
                    <UploadCard/>
                </div>
            </section>
    )
}
function UploadCard() {
    return(
        <div className="w-full max-w-2xl max-h-full p-8 py-48 bg-white shadow-xl rounded-3xl">
            <div className={"flex flex-col items-center text-center gap-8"}>
                <button className={"px-16 py-4 text-lg font-bold bg-gradient-to-r text-white from-blue-500 to-indigo-600 rounded-full"}>Upload Image</button>
                <p className="text-gray-500">
                    or drop a file
                </p>
            </div>
        </div>
    )
}

export default HeroSection;