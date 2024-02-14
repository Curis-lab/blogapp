import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from "@/data";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <CategoriesList />
      {postsData && postsData.length > 0 ? (
        postsData.map((post) => <Post 
        key={post.id}
        id={post.id}
        author = {post.author}
        authorEmail={"test@email.com"}
        date={post.datepublished}
        thumbnail={post.thumbnail}
        category={post.category}
        title={post.title}
        content={post.content}
        links={post.links || []}/>)
      ) : (
        <div>No Post Created yet. 
            <Link href={`/create-post`} className="underline">Create New Post</Link>
        </div>
      )}
    </>
  );
}
