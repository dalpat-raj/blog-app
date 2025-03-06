import React from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(()=> import("@/components/home/Hero"));
const Advertisment = dynamic(()=> import("@/components/home/Advertisment"));
const Blogs = dynamic(()=> import("@/components/blog/Blogs"));
const NewsLetter = dynamic(()=> import("@/components/home/NewsLetter"));

export default function Home() {
  return (
    <div className="px-24 max-sm:px-4 max-md:px-16">
      <Hero/>
      <Advertisment/>
      <Blogs heading="Latest Blog Post"/>
      <NewsLetter/>
    </div>
  );
}
