"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import { createBlog } from "@/actions/blog";
import ButtonWithSpinner from "@/components/button/ButtonWithSpinner";
import { useRouter } from "next/navigation";
import { BlogState } from "@/lib/definations";


export default function CreateBlog() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    setBlogs(storedBlogs);
  }, []);

  // use useActionState hook. it's allows to update state based on the result of a form action 
  const [state, formAction, isPending] = useActionState<BlogState, FormData>( 
    async (prevState, formData) => {
      const newBlog = await createBlog(prevState, formData);
      
      if (newBlog.success) {
        // add new blog 
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const content = formData.get("content") as string;
        const image = URL.createObjectURL(formData.get("image") as Blob);
        const id = Date.now() + 1;

        const updatedBlogs = [...blogs, { id, title, description, content, image }];
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        alert(newBlog.success);
        router.push("/blog"); // when blog create than navigate to /blog page

      }else if(newBlog.error){
        alert(newBlog.error);
      }else{
        alert("something went wrong ❌");
      }

      return newBlog;
    },
    { success: "", error: "" }
  );

  return (
    <div className="flex justify-center items-center my-4 max-sm:my-0">
    <div className="w-1/2 max-sm:w-full max-md:w-3/4 shadow-custom-shadow p-4 px-8 max-sm:p-4 rounded-lg max-sm:border-0 max-sm:shadow-none">
      <h1 className="text-xl font-bold text-[--primary] dark:text-[--white] text-center mb-4">Create New Blog</h1>
      <form action={formAction} className="space-y-4">
          <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-[--primary] dark:text-[--light-gray] mb-1">Title</label>
          <input
              type="text"
              id="title"
              name="title"
              placeholder="Titles"
              className='w-full text-sm text-[--gray] p-2 border border-gray-200 outline-none dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-300 rounded-md'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-semibold text-[--primary] dark:text-[--light-gray] mb-1">Description</label>
          <input
              type="text"
              id="desc"
              name="description"
              placeholder="Description"
              className='w-full text-sm text-[--gray] p-2 border border-gray-200 outline-none dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-300 rounded-md'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-semibold text-[--primary] dark:text-[--light-gray] mb-1">Content</label>
          <textarea
              id="content"
              name="content"
              placeholder="Content"
              className='w-full text-sm text-[--gray] p-2 border border-gray-200 outline-none dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-300 rounded-md'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="img" className="block text-sm font-semibold text-[--primary] dark:text-[--light-gray] mb-1">Image</label>
          <input
              type="file"
              id="img"
              name="image"
              placeholder="image"
              className='w-full text-sm text-[--gray] p-2 border border-gray-200 outline-none dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-300 rounded-md'
          />
          </div>
          
          <div className="flex items-center justify-center max-sm:justify-start">
            <ButtonWithSpinner loading={isPending}>
                Post Blog
            </ButtonWithSpinner>
          </div>
      </form>
  </div>
  </div>
  );
}
