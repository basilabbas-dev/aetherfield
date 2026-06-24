function Hero(){
    return(
        <div className="text-center">
        <h1>Sustainability insights,built for business.</h1>
        <p>Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>

        <div className="flex justify-center">
            <button className="bg-black text-white px-6 py-3 border-r border-gray-600 flex items-center gap-2 font-mono">
                <span>▪</span>
                Request a demo
            </button>

            <button className="bg-black text-white px-6 py-3 flex items-center gap-2 font-mono">
                <span>▪</span>
                Explore the platform
            </button>
        </div>
        </div>
    )
}

export default Hero;