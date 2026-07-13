export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-6 animate-pulse">

      {/* Title */}
      <div className="h-12 w-3/4 bg-gray-200 rounded mx-auto mb-10"></div>

      {/* Hero Image */}
      <div className="w-full h-[400px] bg-gray-200 rounded-xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">

        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">

          <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
          <div className="h-6 w-36 bg-gray-200 rounded"></div>

          <div className="mt-10">
            <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
            <div className="h-6 w-32 bg-gray-200 rounded"></div>
          </div>

        </aside>

        {/* Blog Content */}
        <article className="lg:col-span-9 space-y-8">

          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div className="h-8 w-1/2 bg-gray-200 rounded mb-5"></div>

              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
                <div className="h-4 w-10/12 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}

        </article>

      </div>

    </main>
  );
}