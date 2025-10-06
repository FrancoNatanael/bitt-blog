"use client";
import { useState } from "react";
import PostCard from "../../components/custom/PostCard";
import data from "../../data/data.json";
import { BlogPost } from "@/types/post.types";

export default function Home() {
  const [posts, setPosts] = useState<Array<BlogPost>>(data);

  const getIsHorizontalCard = (index: number) => {
    return index == 1 || index == 2;
  };

  return (
    <div className="py-20">
      <h1 className="text-6xl tracking-tight">
        Explore, save and share
        <br />
        <span className="italic font-semibold">creative blogs</span>
      </h1>
      <p className="text-lg tracking-tight mt-2 text-gray-500">
        Bitt is a platform for creating and sharing{" "}
        <span className="">creative</span> blogs.
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-6 mx-auto">
        {data
          .filter((x: any, i: number) => i <= 3)
          .map((post: any, index) => (
            <PostCard
              key={index}
              id={post.id}
              title={post.title}
              description={post.description}
              readTime={post.readTime}
              category={post.category}
              horizontal={getIsHorizontalCard(index)}
              className={`${getIsHorizontalCard(index) ? "md:col-span-2" : "col-span-1"}`}
            />
          ))}
      </div>
    </div>
  );
}
