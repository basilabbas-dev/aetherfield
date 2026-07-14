  title: "About Us | Aetherfield",
    "Learn about Aetherfield's mission, values, team, and our commitment to helping organizations make data-driven sustainability decisions.",
    "Aetherfield",
    "Climate Intelligence",
    "ESG",
  ],

import Image from "next/image";

import about from "../assets/Images/about1.png";
import icon from "../assets/Images/Icon.png";
import icon1 from "../assets/Images/Icon(1).png";
import icon2 from "../assets/Images/Icon(2).png";
import about2 from "../assets/Images/about images/Image.png";
import sticker from "../assets/Images/about images/Sticker container.png";
import Navbar from "../components/Navbar.jsx";

export default function About(){
    return(
        <section className="">
            <section className="bg-[linear-gradient(90deg,_#A8D3FF_0%,_#FFF4DF_100%)]">
               <Navbar />
            </section>

            <section className="flex flex-col xl:flex-row min-h-screen">
                  
                <div className="w-full xl:w-1/2 bg-[linear-gradient(180deg,#A8D3FF_0%,#FFF4DF_100%)] flex items-center justify-center">
                    <Image
                    src={about}
                    alt="Mission Card"
                    className="w-[480px] object-contain"
                    />
                </div>

                <div className="w-full xl:w-1/2 flex flex-col md:justify-center md:items-center bg-white">
                    <div className="xl:m-0 h-auto px-5 md:mx-30 xl:pr-10 xl:pl-15">
                    
                        <p className="text-[#8F8F8F] text-xl mb-4">
                            Our mission
                        </p>

                        <h2 className=" text-2xl md:text-4xl font-bold leading-[1.05] tracking-[-2px] text-black block">
                            Climate action starts with better information. We help
                            organizations turn complex data into measurable,
                            meaningful change.
                        </h2>

                        <a href="#" className="inline-block w-full text-center mt-10 bg-black text-white px-8 py-4 text-base font-medium">
                            • Meet the team
                        </a>

                    </div>
                </div>

            </section>


            <section className=" mt-10 md:py-24 bg-cover bg-center mb-16">

                <div className="max-w-7xl mx-auto px-6">
                    
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-6xl mb-8 font-medium">
                            our values
                        </h2>

                    </div>

                    <div className="grid xl:grid-cols-3 gap-6">
                    
                        <div className="rounded-xl p-8 bg-[#F6F8FB]">
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

                        <div className="rounded-xl p-8 bg-[#F6F8FB]">
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

                        <div className="rounded-xl p-8 bg-[#F6F8FB]">
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

            <section className="flex flex-col md:flex-row mx-5 mb-30">

                <div className="md:w-1/2 relative">
                    <Image
                        src={sticker}
                        alt="about"
                        className="hidden md:block absolute -top-23 -left-4 z-10"
                    />
                    <Image
                        src={about2}
                        alt="about"
                        className="w-full h-full"
                    />
                </div>

                <div className="md:w-1/2 md:text-xl my-auto md:px-8">
                    <p className=" capitalize text-xl text-[#6C6C6C] mt-4 md:mt-0"> founder&#39;s stoy</p>
                    <h2 className=" capitalize text-5xl mt-2 mb-10">eunji park</h2>
                    <p className=" capitalize text-xl">Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan. With a background in environmental systems and software design, she’s spent the past decade building tools that turn impact goals into real-world outcomes. She still insists on biking to every investor meeting.</p>
                </div>
            </section>


            <section className="bg-[#F6F8FB] px-8 md:px-12 py-20">
                <h2 className="text-5xl md:text-6xl font-semibold text-black mb-14">
                    Meet the team
                </h2>


                <div className="hidden grid md:grid-cols-[1.5fr_1.5fr_1.5fr] text-xs text-gray-500 pb-3 border-b border-gray-300">
                    <p>Name</p>
                    <p>Title</p>
                    <p className="text-right">Contact</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Eunji Park</p>

                    <p>Founder</p>

                    <a
                        href="mailto:e.park@aetherfield.com"
                        className="underline md:text-right break-all"
                    >
                        e.park@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">AI Gorithm</p>
                    <p>Senior Systems Architect</p>
                    <a href="mailto:a.gorithm@aetherfield.com" className="md:text-right underline">
                    a.gorithm@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Cassandra Query</p>
                    <p>Head of Data Platforms</p>
                    <a href="mailto:c.query@aetherfield.com" className="md:text-right underline">
                    c.query@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Sue Logic</p>
                    <p>Principal Software Engineer</p>
                    <a href="mailto:s.logic@aetherfield.com" className="md:text-right underline">
                    s.logic@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Dash Bordman</p>
                    <p>Product Manager</p>
                    <a href="mailto:d.bordman@aetherfield.com" className="md:text-right underline">
                    d.bordman@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Greta Watt</p>
                    <p>Director of Climate Strategy</p>
                    <a href="mailto:g.watt@aetherfield.com" className="md:text-right underline">
                    g.watt@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Gail Force</p>
                    <p>Environmental Risk Analyst</p>
                    <a href="mailto:g.force@aetherfield.com" className="md:text-right underline">
                    g.force@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Polly Nation</p>
                    <p>UX Designer</p>
                    <a href="mailto:p.nation@aetherfield.com" className="md:text-right underline">
                    p.nation@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Will O&apos;Watt</p>
                    <p>Clean Energy Solutions Manager</p>
                    <a href="mailto:w.owatt@aetherfield.com" className="md:text-right underline">
                    w.owatt@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Lana Terra</p>
                    <p>Earth Systems Research</p>
                    <a href="mailto:l.terra@aetherfield.com" className="md:text-right underline">
                    l.terra@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Ella Vation</p>
                    <p>Earth Systems Researcher</p>
                    <a href="mailto:e.vation@aetherfield.com" className="md:text-right underline">
                    e.vation@aetherfield.com
                    </a>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] py-4 border-b border-gray-300 gap-2 md:gap-0">
                    <p className="font-medium">Phil Scope</p>
                    <p>Lifecycle Assessment Lead</p>
                    <a href="mailto:p.scope@aetherfield.com" className="md:text-right underline">
                    p.scope@aetherfield.com
                    </a>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center py-30">
                <h3 className="text-center text-4xl xl:text-5xl mb-8">We’re hiring! Want to join the team?</h3>
                <a href="#" className="inline-block bg-black px-5 py-3 text-white capitalize">
                   • view open roles
                </a>
            </section>
        </section>
    )
}