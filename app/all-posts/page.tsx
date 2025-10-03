import PostCard from "@/components/custom/PostCard";
import data from "../../data/data.json";

export default function Page(){

    return <div className="py-20">
        <h3 className="text-4xl tracking-tight">All posts</h3>

        <div className="grid gap-4 grid-cols-3 mt-6">
            {data.map((post: any, index) => (
            <PostCard 
            key={index} 
            title={post.title} 
            description={post.description} 
            readTime={post.readTime} 
            category={post.category}
            horizontal={false}/>
            ))}
      </div>
    </div>
}