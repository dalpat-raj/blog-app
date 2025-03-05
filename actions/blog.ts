"use server";

import { BlogState } from "@/lib/definations";


export async function createBlog(prevState: BlogState, formData: FormData): Promise<BlogState> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as Blob; // Image as Blob

  if (!title || !description || !content || !image) {
    return { error: "All fields are required! ❌" };
  }


  return { success: "Blog created successfully! ✅" };
}
