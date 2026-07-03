import Image from "next/image";
import Link from "next/link";
import blogs from "./data";

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

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/journal/${blog.slug}`}
            >
              <div className="cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[280px] object-cover"
                />

                <h3 className="mt-3 text-lg font-semibold">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.category} • {blog.readTime}
                </p>

                <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
              </div>
            </Link>
          ))}

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/journal/${blog.slug}`}
            >
              <div className="cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[280px] object-cover"
                />

                <h3 className="mt-3 text-lg font-semibold">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.category} • {blog.readTime}
                </p>

                <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
              </div>
            </Link>
          ))}

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/journal/${blog.slug}`}
            >
              <div className="cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[280px] object-cover"
                />

                <h3 className="mt-3 text-lg font-semibold">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.category} • {blog.readTime}
                </p>

                <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
              </div>
            </Link>
          ))}

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/journal/${blog.slug}`}
            >
              <div className="cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[280px] object-cover"
                />

                <h3 className="mt-3 text-lg font-semibold">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.category} • {blog.readTime}
                </p>

                <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
              </div>
            </Link>
          ))}

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/journal/${blog.slug}`}
            >
              <div className="cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[280px] object-cover"
                />

                <h3 className="mt-3 text-lg font-semibold">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.category} • {blog.readTime}
                </p>

                <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
              </div>
            </Link>
          ))}

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/journal/${blog.slug}`}
            >
              <div className="cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[280px] object-cover"
                />

                <h3 className="mt-3 text-lg font-semibold">{blog.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.category} • {blog.readTime}
                </p>

                <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
              </div>
            </Link>
          ))}
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