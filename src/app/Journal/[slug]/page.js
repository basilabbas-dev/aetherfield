// import blogs from "../data";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export default async function BlogPage({ params }) {

//   const { slug } = await params;

//   const blog = blogs.find((item) => item.slug === slug);

//   if (!blog) {
//     notFound();
//   }

//   return (

//     <main className="max-w-7xl mx-auto py-16 px-6">

//       <h1 className="text-6xl font-semibold text-center mb-10">

//         {blog.title}

//       </h1>

//       <Image
//         src={blog.image}
//         alt={blog.title}
//         className="w-full rounded-xl"
//       />

//       <div className="grid grid-cols-12 gap-20 mt-20">

//         <aside className="col-span-3">

//           <p className="text-gray-500">
//             Published
//           </p>

//           <h4 className="font-semibold">
//             {blog.published}
//           </h4>

//           <div className="mt-10">

//             <p className="text-gray-500">
//               Author
//             </p>

//             <h4 className="font-semibold">
//               {blog.author}
//             </h4>

//           </div>

//         </aside>

//         <article className="col-span-9">

//           {blog.sections.map((section, index) => (

//             <div
//               key={index}
//               className="mb-14"
//             >

//               <h2 className="text-3xl font-bold mb-5">

//                 {section.heading}

//               </h2>

//               <p className="leading-9 text-gray-700">

//                 {section.body}

//               </p>

//             </div>

//           ))}

//         </article>

//       </div>

//     </main>

//   );

// }


import blogs from "../data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight mb-8 lg:mb-10">
        {blog.title}
      </h1>

      {/* Banner Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={1400}
        height={800}
        className="w-full h-auto rounded-xl object-cover"
        priority
      />

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mt-10 lg:mt-20">

        {/* Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 h-fit">

          <div className="border-b lg:border-b-0 pb-6 lg:pb-0">

            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Published
            </p>

            <h4 className="font-semibold text-lg mt-1">
              {blog.published}
            </h4>

            <div className="mt-8">

              <p className="text-gray-500 text-sm uppercase tracking-wide">
                Author
              </p>

              <h4 className="font-semibold text-lg mt-1">
                {blog.author}
              </h4>

            </div>

          </div>

        </aside>

        {/* Blog Content */}
        <article className="lg:col-span-9">

          {blog.sections.map((section, index) => (

            <div
              key={index}
              className="mb-10 lg:mb-14"
            >

              <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-5">
                {section.heading}
              </h2>

              <p className="text-base md:text-lg leading-8 text-gray-700">
                {section.body}
              </p>

            </div>

          ))}

        </article>

      </div>

    </main>
  );
}