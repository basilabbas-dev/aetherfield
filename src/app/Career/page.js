import Link from "next/link";
import Navbar from "../components/Navbar";
import careers from "./data";

export default function Career() {
  return (
    <section className="px-5 bg-[linear-gradient(180deg,_#A8D3FF_0%,_#FFF4DF_100%)]">
      <Navbar />

      <h1 className="text-4xl md:text-7xl capitalize text-center pt-20 pb-10 px-10 md:px-30">
        careers at
        <span className="capitalize font-bold block">
          aetherfield
        </span>
      </h1>

      <div className="pb-30">
        {careers.map((career) => (
          <div
            key={career.slug}
            className={`max-w-5xl mx-auto p-8 mb-5 ${
              career.slug === "open-application"
                ? "border border-dashed border-gray-400 bg-transparent"
                : "border border-gray-300 bg-[#F5F5F5]"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black">
                  {career.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {career.type} · {career.location}
                </p>

                <p className="mt-8 text-xl text-gray-800 leading-relaxed max-w-4xl">
                  {career.shortDescription}
                </p>
              </div>

              <Link
                href={`/Career/${career.slug}`}
                className="bg-black text-white px-3 py-3 whitespace-nowrap font-medium flex items-center justify-center self-start"
              >
                {career.slug === "open-application"
                  ? "Apply now"
                  : "View role"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}