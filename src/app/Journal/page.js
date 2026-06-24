import Image from "next/image";

import Navbar from "../components/Navbar";
import image1 from "../assets/Images/journal images/Image (1).png"
import image2 from "../assets/Images/journal images/Image (2).png"
import image3 from "../assets/Images/journal images/Image (3).png"
import image4 from "../assets/Images/journal images/Image (4).png"
import image5 from "../assets/Images/journal images/Image (5).png"
import image6 from "../assets/Images/journal images/Image (6).png"
import image7 from "../assets/Images/journal images/Image (7).png"

export default function Journal() {
  return (
    <section className="px-5">
      <section className="">
        <Navbar />
      </section>

      <section className="px-10y">
        <Image
          src={image1}
          alt=""
          className="w-full "
        />
      </section>

      <section className="bg-white pb-10">
        <h2 className="text-4xl font-semibold text-center mt-6 mb-10">
          Latest articles
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-12">

          <div>
            <Image
              src={image2}
              alt="Article"
              className="w-full h-[280px] object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">
              How to Build a Climate-Ready Data Stack
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Insights • 4 min
            </p>
            <p className="mt-2 text-lg text-gray-700">
              A practical guide for sustainability teams in integrating
              emissions, waste, and energy data into modern workflows.
            </p>
          </div>

          <div>
            <Image
              src={image3}
              alt="Article"
              className="w-full h-[280px] object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">
              Sustainability Isn&#39;t a Side Project: Making Impact Operational
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Strategy • 4 min
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Why climate goals belong in your core roadmap—not just in the annual ESG report.
            </p>
          </div>

          <div>
            <Image
              src={image4}
              alt="Article"
              className="w-full h-[280px] object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">
              Inside the Aetherfield Model: How We Turn Data Into Action
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Insights • 5 min
            </p>
            <p className="mt-2 text-lg text-gray-700">
              A behind-the-scenes look at our platform logic, system architecture,
              and sustainability reasoning.
            </p>
          </div>

          <div>
            <Image
              src={image5}
              alt="Article"
              className="w-full h-[280px] object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">
              From Spreadsheets to Systems: The Evolution of Climate Reporting
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Tooling • 6 min
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Why legacy tools aren&#39;t enough—and what the next generation of reporting looks like.
            </p>
          </div>

          <div>
            <Image
              src={image6}
              alt="Article"
              className="w-full h-[280px] object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">
              Carbon Accounting: Myths, Models, and Must-Haves
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Learning • 6 min
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Debunking common assumptions and defining a framework for getting it right.
            </p>
          </div>

          <div>
            <Image
              src={image7}
              alt="Article"
              className="w-full h-[280px] object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">
              Seeing Clearly: Designing Feedback Loops for Sustainable Growth
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Strategy • 4 min
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Building responsive systems that keep sustainability strategy adaptive and actionable.
            </p>
          </div>

        </div>
      </section>

      <section className="flex flex-col justify-center items-center pb-10 pt-10 md:py-20">
        <h3 className=" text-center text-2xl md:text-4xl mb-8">Subscribe to Aetherfield Journal</h3>
        <a href="#" className="bg-black px-5 py-3 text-white capitalize">
            • sign up to newsletter
        </a>
      </section>
    </section>
  );
}