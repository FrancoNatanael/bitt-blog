import PostCard from "../../components/custom/PostCard";
import data from "../../data/data.json";

export default function Home() {

  return (
    <div className="py-20">
      <h1 className="text-6xl tracking-tight">
        Explore, save and share 
        <br />
        <span className="italic font-semibold">creative blogs</span>
      </h1>
      <p className="text-lg tracking-tight mt-2 text-gray-500">
        Bitt is a platform for creating and sharing <span className="">creative</span> blogs.
      </p>

      {data.map((post: any) => (
        <PostCard key={post.id} title={post.title} description={post.description} readTime={post.readTime} category={post.category}/>
      ))}
    </div>
  );
}