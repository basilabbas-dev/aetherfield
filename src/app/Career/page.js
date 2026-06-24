import Navbar from "../components/Navbar";

function Career(){
    return(
        <section className=" px-5 bg-[linear-gradient(180deg,_#A8D3FF_0%,_#FFF4DF_100%)]">
            <Navbar />
            <h1 className=" text-4xl md:text-7xl capitalize text-center pt-20 pb-10 px-10 md:px-30">careers at <span className="capitalize font-bold block">aetherfield</span></h1>
            <div className="pb-30">
                <div className="max-w-5xl mx-auto border border-gray-300 bg-[#F5F5F5] p-8 mb-5">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-black">
                                UX Designer
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Contract · San Francisco, CA
                            </p>

                            <p className="mt-8 text-xl text-gray-800 leading-relaxed max-w-4xl">
                                Shape the tools that drive climate intelligence. You&#39;ll lead
                                cross-functional teams to build thoughtful, scalable solutions
                                for sustainability-forward organizations.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="bg-black text-white px-3 py-3 whitespace-nowrap font-medium flex items-center justify-center self-start"
                        >
                            View role
                        </a>

                    </div>

                </div>


                <div className="max-w-5xl mx-auto border border-gray-300 bg-[#F5F5F5] p-8 mb-5">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-black">
                                Data Scientist  
                            </h3>

                            <p className="text-gray-500 mt-2">
                               Part-time · Seattle, WA
                            </p>

                            <p className="mt-8 text-xl text-gray-800 leading-relaxed max-w-4xl">
                                Help build the intelligence layer for climate action. You’ll turn 
                                complex sustainability data into clear, actionable insights 
                                for enterprise teams.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="bg-black text-white px-3 py-3 whitespace-nowrap font-medium flex items-center justify-center self-start"
                        >
                            View role
                        </a>

                    </div>

                </div>

                <div className="max-w-5xl mx-auto border border-gray-300 bg-[#F5F5F5] p-8 mb-5">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-black">
                                UX Designer
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Part-time · Seattle, WA

                            </p>

                            <p className="mt-8 text-xl text-gray-800 leading-relaxed max-w-4xl">
                                Shape the tools that drive climate intelligence. You’ll lead cross-functional 
                                teams to build thoughtful, scalable solutions for sustainability-forward organizations.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="bg-black text-white px-3 py-3 whitespace-nowrap font-medium flex items-center justify-center self-start"
                        >
                            View role
                        </a>

                    </div>

                </div>

                <div className="max-w-5xl mx-auto border border-gray-300 bg-[#F5F5F5] p-8 mb-5">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-black">
                                UX Designer
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Full-time · Denver, CO
                            </p>

                            <p className="mt-8 text-xl text-gray-800 leading-relaxed max-w-4xl">
                                Don’t see your role available? Apply for an open application!
                            </p>
                        </div>

                        <a
                            href="#"
                            className="bg-black text-white px-3 py-3 whitespace-nowrap font-medium flex items-center justify-center self-start"
                        >
                            View role
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Career;