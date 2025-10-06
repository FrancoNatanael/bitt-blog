"use client";
import PostCard from "@/components/custom/PostCard";
import data from "../../data/data.json";
import { BlogPost } from "@/types/post.types";
import { useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<Array<BlogPost>>(data);

  return (
    <div className="py-20">
      <h3 className="text-4xl tracking-tight">All posts</h3>

      <div className="grid gap-4 md:grid-cols-3 mt-6">
        {posts.map((post: BlogPost, index: number) => (
          <PostCard
            key={index}
            id={post.id}
            title={post.title}
            description={post.description}
            readTime={post.readTime}
            category={post.category}
            horizontal={false}
          />
        ))}
      </div>
    </div>
  );
}
