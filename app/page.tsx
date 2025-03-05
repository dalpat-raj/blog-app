import Blogs from "@/components/blog/Blogs";
import Advertisment from "@/components/home/Advertisment";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="px-24 max-sm:px-4 max-md:px-16">
      <Hero/>
      <Advertisment/>
      <Blogs/>
    </div>
  );
}
