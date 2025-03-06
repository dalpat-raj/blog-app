"use client";
import React, { Suspense, useEffect, useState } from "react";
import blogsData from "@/data/blogs.json";
import { BlogData } from "@/lib/definations";
import Image from "next/image";
import { dummy_Data } from "@/data/data";
import Blogs from "./Blogs";

const BlogDetails = ({ id }: { id: string | any }) => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);  

  useEffect(() => {
      const storedBlogs: BlogData[] = JSON.parse(localStorage.getItem("blogs") || "[]");  // get blog to local storage
      setBlogs([...blogsData, ...storedBlogs, ...dummy_Data]); // set all blog in state
  }, []);

  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <div className="w-full px-24 py-6 max-[990px]:px-14 max-md:px-6 max-sm:px-4 max-sm:py-4">
      { blog ? (
        <div className="grid grid-cols-12 items-start gap-8 max-sm:gap-4">
          <div className="col-span-5 max-md:col-span-6 max-sm:col-span-12 rounded-md overflow-hidden">
            <Image
              src={blog.image}
              alt="blog"
              width={0}
              height={0}
              sizes="100vw"
              style={{width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-span-7 max-md:col-span-6 max-sm:col-span-12">
            <div className="flex justify-start items-center gap-2">
              <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                <Image
                  src="/assets/users/a1.jpg"
                  alt="Elizabeth"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="text-[--gray] font-semibold">Elizabeth</p>
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold text-[--primary] dark:text-[--white]">{blog.title}</h2>
              <p className="py-3 text-[--gray-light] font-semibold">{blog.description}</p>
              <p className="text-[--gray]">{blog.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p className="font-semibold text-center">Blog Not Found ❌</p>
        </div>
      )
      }
      <div>
        <Suspense fallback="...loading">
          <Blogs heading="Recomended Blog"/>
        </Suspense>
      </div>
    </div>
  );
};

export default BlogDetails;
