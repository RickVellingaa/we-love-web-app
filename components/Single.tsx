"use client";

import React, { useEffect, useState } from "react";
import { getSingleBlog } from "@/services/Blog";
import { useParams } from "next/navigation";
import Link from "next/link";

const Single = () => {
  const { slug } = useParams();
  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  const [blogData, setBlogData] = useState<any | null>(null);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const data: any = await getSingleBlog(slugValue);
        setBlogData(data.blog);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleBlog();
  }, [slugValue]);

  if (!blogData) {
    return;
  }

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
        <div className="w-full grid grid-blog gap-4 px-52">
          <div className="border border-border-kleur rounded-lg relative flex items-center bg-[#184c57] text-center">
            <div className="w-full h-full relative z-0">
              <img
                className="border imagegrid border-border-kleur rounded-lg"
                src={blogData.foto.url}
                alt=""
              />
            </div>
          </div>

          <div className="bg-white text-donker-groen flex justify-start rounded-lg font-semibold">
            {blogData && (
              <Link
                className="pointer"
                href="/blog/[slug]"
                as={`/blog/${blogData.slug}`}
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="py-6 relative px-8 flex flex-col justify-between items-start">
                    <span className="bg-licht-groen text-base py-1 px-4">
                      Over dit blog
                    </span>
                    <h1 className="text-5xl font-bold pt-4">
                      {blogData.titel}
                    </h1>
                    <p className="font-thin text-base pt-2">
                      {blogData.samenvatting}
                    </p>
                  </div>
                  <div className="px-8 py-8">
                    <p className="uppercase font-normal text-sm tracking-widest">
                      We Love Web sessie van
                      <span className="font-bold"> {blogData.gastlezer}</span>
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full px-52 py-8">
        <div className="w full grid grid-cols-3 bg-donker-groen border border-border-kleur rounded-lg">
          <div className="flex flex-col justify-center items-center py-6">
            <h2 className="text-lg font-bold uppercase tracking-wider">
              Leestijd
            </h2>
            <p className="text-sm uppercase tracking-wider opacity-75">
              {blogData.lengte} min read
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-6">
            <h2 className="text-lg font-bold uppercase tracking-wider">Tags</h2>
            <p className="text-sm uppercase tracking-wider opacity-75">
              {blogData.tag}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-6">
            <h2 className="text-lg font-bold uppercase tracking-wider">
              Datum van sessie
            </h2>
            <p className="text-sm uppercase tracking-wider opacity-75">
              {blogData.datum}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
