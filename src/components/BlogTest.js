import React from "react";


export default function BlogTest() {
  return (
    <section id="blogTest" className="rounded-full">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          Blog
          </h1>
          <br/>
          <br/>
          <p className="mb-8 leading-relaxed">
          This is going to be my personal blog.
          </p>

        </div>

      </div>
    </section>
  );
}
