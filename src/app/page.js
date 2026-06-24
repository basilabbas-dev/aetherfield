"use client";
import Image from "next/image";

import heroImage from "./assets/Images/Hero image.png";
import sustainabilityImage from "./assets/Images/sustainability.png";
import icon from "./assets/Images/Icon.png";
import icon1 from "./assets/Images/Icon(1).png";
import icon2 from "./assets/Images/Icon(2).png";
import valueSection from "./assets/Images/Values section.png";
import sectionImage from "./assets/Images/Image.png";
import person from "./assets/Images/person.png";
import article1 from "./assets/Images/article-1.png";
import article2 from "./assets/Images/article-2.svg";
import article3 from "./assets/Images/article-3.svg";
import sticker from "./assets/Images/Sticker container.png";
import Navbar from "./components/Navbar.jsx";




export default function Home(){

    const features = [
    {
      title: "Track",
      description:
        "Emissions, energy, and waste across your value chain",
      number: "001",
    },
    {
      title: "Model",
      description:
        "Forecast performance and goal alignment",
      number: "002",
    },
    {
      title: "Report",
      description:
        "Generate ESG disclosures, automate frameworks",
      number: "003",
    },
    {
      title: "Act",
      description:
        "Surface insights and operational next steps",
      number: "004",
    },
  ];
    return(
        <div className="">
            <section className="text-center bg-[linear-gradient(180deg,_#A8D3FF_0%,_#FFF4DF_100%)]">
                <Navbar />
                <h1 className="text-black text-4xl md:text-6xl mx-auto max-w-3/4 pt-20 xl:text-7xl">Sustainability insights,<span className="block font-bold">built for business.</span></h1>
                <p className="text-black text-xl w-3/4 mx-auto xl:text-xl mt-4">Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>

                <div className="mb-14 flex flex-col md:flex-row justify-center items-center mt-8 gap-3 md:gap-0">
                    <a
                        href="#"
                        className="bg-black text-white px-6 py-3 flex items-center gap-2 font-mono"
                    >
                        <span>▪</span>
                        Request a demo
                    </a>

                    <a
                        href="#"
                        className="bg-black text-white px-6 py-3 flex items-center gap-2 font-mono md:ml-4"
                    >
                        <span>▪</span>
                        Explore the platform
                    </a>
                </div>

                <section className=" mx-5">
                    <div className="flex justify-center">
                    <Image
                        src={heroImage}
                        alt="hero"
                        className="w-[900px] max-w-full"
                    />
                    </div>
                </section>
            </section>

            <section className="bg-white max-w-7xl mx-auto px-6 py-10 xl:py-30">
                <h2 className="text-center text-2xl xl:text-5xl font-bold leading-tight mb-5">
                Everything you need to measure,
                <br />
                model, and act on sustainability
                </h2>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                
                    <div className="h-full relative">
                        <Image
                        src={sustainabilityImage}
                        alt="Sustainability"
                        className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        {features.map((item) => (
                        <div
                            key={item.number}
                            className="flex justify-between border-b py-8">

                            <div>
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600">
                                {item.description}
                            </p>
                            </div>

                            <span className="text-gray-400">
                            {item.number}
                            </span>
                        </div>
                        ))}

                        <div className="mt-8 w-full">
                            <a href="#" className="inline-block w-full xl:w-auto text-center bg-black text-white px-6 py-3 text-sm cursor">
                            Explore features
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>    

            <section className=" py-10 px-5 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${valueSection.src})`,
                }}
                >
                <div className="max-w-7xl mx-auto px-6">
                    
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif font-medium">
                            Built for clarity
                        </h2>

                        <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold">
                            Designed for action
                        </h3>
                    </div>

                    <div className="grid xl:grid-cols-3 gap-6">
                    
                        <div className="bg-white rounded-xl p-8">
                            <div className="text-3xl mb-6">
                                <Image
                                    src={icon}
                                    alt="icon"
                                    className=""
                                />
                            </div>

                            <h4 className="font-semibold mb-3">
                            Clarity drives action
                            </h4>

                            <p className="text-gray-700">
                            We believe better decisions start with
                            better data—measured, visible, and trusted.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8">
                            <div className="text-3xl mb-6">
                                <div className="text-3xl mb-6">
                                <Image
                                    src={icon1}
                                    alt="icon"
                                    className=""
                                />
                            </div>
                            </div>

                            <h4 className="font-semibold mb-3">
                            Sustainability is a systems problem
                            </h4>

                            <p className="text-gray-700">
                            We build tools that help teams connect
                            the dots between operations, impact,
                            and accountability.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8">
                            <div className="text-3xl mb-6">
                                <div className="text-3xl mb-6">
                                <Image
                                    src={icon2}
                                    alt="icon"
                                    className=""
                                />
                            </div>
                            </div>

                            <h4 className="font-semibold mb-3">
                            We support real-world momentum
                            </h4>

                            <p className="text-gray-700">
                            Helping organizations move from
                            ambition to measurable change.
                            </p>
                        </div>

                    </div>
                </div>
            </section> 

            <section className=" mx-10 my:15 md:mx-5 md:my-20 xl:mx-38 xl:my-30 ">
                <div className=" flex flex-col md:flex-row bg-[#F6F8FB]">
                    <Image 
                        src={sectionImage}
                        alt="image"
                        className=""
                    />

                    <div className="ml-10 my-12 mr-5">
                        <h3 className="mb-4 capitalize font-bold text-xl">Why Acme Inc chose Aetherfield</h3>
                        <p className="text-xl">With fragmented data and growing reporting pressure, Acme turned to Aetherfield to streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and 34% more coverage.</p>
                        <div className="mt-8">
                            <a href="#" className="bg-black text-white p-2 uppercase text-sm">read case study</a>
                        </div>
                    </div>
                </div>
            </section>   

            <section className="relative bg-white py-20 overflow-hidden">

                <div className="absolute top-10 left-0">
                    <Image
                        src={sticker}
                        alt="sticker"
                        className="hidden md:block w-[450px]"
                    />
                </div>

                <div className="max-w-3xl mx-auto px-6 relative">

                    <h2 className="text-5xl font-bold text-center mb-12">
                        From the Journal
                    </h2>

                    <div>

                        <div className="flex flex-col md:flex-row items-center gap-6 pb-10 mb-10 border-b border-gray-400">

                            <Image
                                src={article1}
                                alt="Article 1"
                                className="w-full h-full md:w-32 h-24 object-cover"
                            />

                            <div className="w-full">
                                <h3 className="text-xl font-semibold mb-2">
                                    How to Build a Climate-Ready Data Stack
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Insights • 4 min
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6 pb-10 mb-10 border-b border-gray-300">

                            <Image
                                src={article2}
                                alt="Article 2"
                                className="w-full h-full md:w-32 h-24 object-cover"
                            />

                            <div className="w-full">
                                <h3 className="text-xl font-semibold mb-2">
                                    Sustainability Isn&#39;t a Side Project: Making Impact Operational
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Strategy • 7 min
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6 pb-10 border-b border-gray-300">

                            <Image
                                src={article3}
                                alt="Article 3"
                                className="w-full h-full md:w-32 h-24 object-cover"
                            />

                            <div className="w-full">
                                <h3 className="text-xl font-semibold mb-2">
                                    Inside the Aetherfield Model: How We Turn Data Into Action
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Insights • 5 min
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="block w-full bg-black text-white text-center py-4 text-lg"
                        >
                            View All Articles
                        </a>
                    </div>

                </div>

            </section>

            <section className="w-full bg-[#f5f5f5] md:py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

                    <div className=" w-full md:w-1/2">
                        <Image
                            src={person}
                            alt="Person"
                            className="w-full h-auto object-cover "
                        />
                    </div>

                    <div className=" w-full md:w-1/2 bg-white flex items-center lg:px-20 md:px-10">
                        <div className="max-w-md">

                                <div className="text-gray-200 text-6xl mb-8 leading-none">
                                &quot
                                </div>
                            <h2 className="text-3xl xl:text-5xl font-bold leading-[1.05] text-black mb-12">
                            We finally moved past spreadsheets and guesswork. Now we have
                            real data to guide real decisions.
                            </h2>

                            <div className="w-full mb-10">
                            <h3 className="font-semibold text-black text-lg">
                                Elliot Williams
                            </h3>

                            <p className="text-gray-500 text-base">
                                Head of Sustainability, Flux Materials
                            </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            
            <section className="bg-[#f5f5f5] py-10 md:py-24">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    
                    <h2 className="text-4xl font-bold text-center text-black mb-10">
                    Ready to operationalize your sustainability goals?
                    </h2>

                    <a href="#" className="bg-black text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition">
                    • Request a demo
                    </a>

                </div>
            </section>
        </div>
        
    )
}