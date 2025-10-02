export default function PostCard({title, description, readTime, category}: any){
    return <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{readTime}</p>
        <p>{category}</p>
    </div>
}