"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "@/services/Blogs";
import Link from "next/link";

type Blog = {
  titel: string;
  beschrijving: string;
  tag: string;
  lengte: string;
  slug?: string;
  params?: string;
  // Add other properties as needed
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    try {
      const data = (await getBlogs()) as { blogs: Blog[] }; // Cast data to the expected type
      if (data.blogs.length > 0) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blog data: ", error);
    }
  };

  const truncateDescription = (description: string, words: number) => {
    const wordArray = description.split(" ");
    if (wordArray.length > words) {
      return wordArray.slice(0, words).join(" ") + "...";
    }
    return description;
  };

  return (
    <section className="px-52 pb-16">
      <ul className="grid-vv">
        {blogs.map((blog, index) => (
          <li
            key={index}
            className="w-full h-full bg-donker-groen border border-border-kleur rounded-lg"
          >
            <div className="w-full h-full flex flex-col justify-between items-start">
              <section className="px-8 py-4">
                <h3 className="text-2xl font-extrabold mb-4 text-licht-groen">
                  {blog.titel}
                </h3>
                <p>{truncateDescription(blog.beschrijving, 30)}</p>
              </section>
              <section className="px-8 pb-4 mt-4">
                <Link href="/blog/[slug]" as={`/blog/${blog.slug}`}>
                  Read more...
                </Link>
                <p className="uppercase font-normal opacity-75 text-sm tracking-widest">
                  <span className="font-bold">{blog.tag} </span>| {blog.lengte}{" "}
                  min read
                </p>
              </section>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
