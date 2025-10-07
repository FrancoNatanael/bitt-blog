"use client";
import PostCard from "@/components/custom/PostCard";
import data from "../../data/data.json";
import { BlogPost } from "@/types/post.types";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const categories: string[] = ["music", "books", "movies"];
  const posts = useMemo(() => {
    return selectedCategory == ""
      ? data
      : data.filter((x) => x.category == selectedCategory);
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(selectedCategory == category ? "" : category);
  };

  return (
    <div className="py-20">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-4xl tracking-tight">All posts</h3>

        <div className="w-fit flex h-fit gap-2">
          {categories.map((category: string, i: number) => (
            <Badge
              key={i}
              variant={selectedCategory == category ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

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
