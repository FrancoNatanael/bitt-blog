"use client";
import { BlogPost } from "@/types/post.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../../data/data.json";

export default function Page() {
  const { id } = useParams();
  const [posts, setPosts] = useState<Array<BlogPost>>(data);
  const [post, setPost] = useState<BlogPost | undefined>(undefined);

  useEffect(
    () =>
      setPost(
        posts.find(
          (x: BlogPost) => (x.id as number) == (id as unknown as number),
        ),
      ),
    [id],
  );

  return (
    <div className="py-20 w-[60%]">
      {post && (
        <>
          <h2 className="font-semibold text-4xl mb-2">{post.title}</h2>

          <p className="text-gray-600 mb-3">{post.description}</p>

          <p className="text-sm mb-2">
            <span className="text-gray-600">By</span> {post.author}
            <span className="text-gray-600"> in</span>{" "}
            {new Date(post.createdAt).toLocaleDateString()}
          </p>

          <img
            src={"../default-image.jpg"}
            className="rounded-md h-[500px] row-span-full"
          ></img>

          <p className="mt-4 text-xl">{post.text}</p>
        </>
      )}
    </div>
  );
}
