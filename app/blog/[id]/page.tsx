"use client"
import React, { Suspense, use } from "react";
import BlogDetails from "@/components/blog/BlogDetails";
import { useParams } from "next/navigation";


const Page = () => {
 
  const params = useParams();
  const id = params?.id;

  return (
    <Suspense fallback="...loading">
      <BlogDetails id={id} />
    </Suspense>
  )
};

export default Page;