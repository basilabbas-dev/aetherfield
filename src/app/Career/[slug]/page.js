import careers from "../data";
import { notFound } from "next/navigation";

export default async function CareerDetails({ params }) {
  const { slug } = await params;

  const career = careers.find((item) => item.slug === slug);

  if (!career) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">

        <div>
          <h1 className="text-5xl font-semibold">
            {career.title}
          </h1>

          <p className="text-gray-500 mt-2">
            {career.type} · {career.location}
          </p>
        </div>

        <button className="bg-black text-white px-6 py-3">
          Apply now
        </button>

      </div>

      {/* Short Description */}
      <p className="mt-10 text-lg text-gray-700 leading-8">
        {career.shortDescription}
      </p>

      <hr className="my-12" />

      {/* About */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-5">
          About the role
        </h2>

        <p className="text-gray-700 leading-8">
          {career.about}
        </p>
      </section>

      {/* Responsibilities */}
      <section className="mb-14">

        <h2 className="text-2xl font-semibold mb-5">
          Responsibilities
        </h2>

        <ul className="list-disc pl-6 space-y-3">

          {career.responsibilities.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}

        </ul>

      </section>

      {/* Requirements */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-5">
          Requirements
        </h2>

        <ul className="list-disc pl-6 space-y-3">

          {career.requirements.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}

        </ul>

      </section>

      <hr />

      {/* Bottom CTA */}
      <section className="text-center py-20">

        <h2 className="text-4xl md:text-6xl font-semibold mb-8">
          Ready to help build the
          <br />
          future of climate intelligence?
        </h2>

        <button className="bg-black text-white px-8 py-4">
          Apply now
        </button>

      </section>

    </main>
  );
}