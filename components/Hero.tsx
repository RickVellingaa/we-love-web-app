"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "@/services/Blogs";
import Link from "next/link";

type Blog = {
  titel: string;
  beschrijving: string;
  tag: string;
  lengte: string;
  slug: string;
  // Add other properties as needed
};

const Hero = () => {
  const [randomBlog, setRandomBlog] = useState<Blog | null>(null);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    try {
      const data = (await getBlogs()) as { blogs: Blog[] }; // Cast data to the expected type
      if (data.blogs.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.blogs.length);
        const randomBlog = data.blogs[randomIndex];
        setRandomBlog(randomBlog);
        console.log(randomBlog);
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
    <section className="w-full relative py-16">
      <div className="w-full bg-red">
        <div className="w-full grid grid-cols-2 gap-4 px-52 min-h-[400px]">
          <div className="border border-border-kleur rounded-lg relative flex items-center bg-[#184c57] text-center">
            <div className="w-full h-full absolute opacity-100 image z-0"></div>
            <div className="w-full h-full pt-16 web z-10  px-8 flex flex-col justify-start">
              <h1 className="font-semibold text-5xl pt-2">We Love Web</h1>
              <p className="pt-2 font-thin text-base ">
                Welkom op mijn We Love Web blog! Op dit blog zal ik mijn
                gedachten en beschrijvingen van de We Love Web sessies zetten
                die ik heb gevolgd tijdens Semester 3 & 4 van de opleiding FDND
                op het HvA. Zo zal ik het bijvoorbeeld gaan hebben over wat de
                sessies gingen zoals Accessibility, Performance, Design, etc.
                Ook zal ik hierin gaan zetten wat ik ervan heb geleerd.
              </p>
            </div>
          </div>

          <div className="bg-white text-donker-groen flex justify-start rounded-lg font-semibold h-full">
            {randomBlog && (
              <Link
                className="pointer"
                href="/blog/[slug]"
                as={`/blog/${randomBlog.slug}`}
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="py-6 px-8 flex flex-col justify-between items-start">
                    <span className="bg-licht-groen text-base py-1 px-4">
                      Featured blog
                    </span>
                    <h2 className="text-5xl font-bold pt-4">
                      {randomBlog.titel}
                    </h2>
                    <p className="font-thin text-base pt-2">
                      {truncateDescription(randomBlog.beschrijving, 70)}
                    </p>
                  </div>
                  <div className="px-8 pt-8 pb-8">
                    <p className="uppercase font-normal text-sm tracking-widest">
                      <span className="font-bold">{randomBlog.tag} </span>|{" "}
                      {randomBlog.lengte} min read
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
