"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

export default function PostCard({
  id,
  title,
  description,
  readTime,
  category,
  horizontal,
  className,
}: any) {
  const { push } = useRouter();

  const onClick = () => {
    push(`/post/${id}`);
  };

  return (
    <Card
      className={`p-4 cursor-pointer ${cn(className, horizontal ? "grid md:grid-cols-2 " : "")}`}
      onClick={onClick}
    >
      <CardHeader className={`p-0`}>
        <img
          src="default-image.jpg"
          className="rounded-md h-full row-span-full w-full"
        />
      </CardHeader>

      <div className="h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <CardTitle className="font-semibold text-2xl tracking-tight text-[var(--blue-900)]">
            {title}
          </CardTitle>

          <CardDescription className="text-base mt-2 text-[var(--blue-900)]">
            {description}
          </CardDescription>
        </div>

        <CardFooter className="p-0 mt-4 flex justify-between w-full flex-none">
          <span className="flex items-center gap-2 text-[var(--blue-900)]">
            <div className="w-[10px] h-[10px] bg-orange-500 rounded-full"></div>
            {readTime} <span className="text-xs">min. read</span>
          </span>
          <Badge>{category}</Badge>
        </CardFooter>
      </div>
    </Card>
  );
}
