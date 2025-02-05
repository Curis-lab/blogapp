import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from "@/data";
import { getPosts } from "@/libs/post";
import { Button } from "@mui/material";

export default async function Home() {
  const { posts } = await getPosts();
  return (
    <>
      <CategoriesList />
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            authorEmail={"test@email.com"}
            date={post.datepublished}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div>No Posts to display</div>
      )}
    </>
  );
}
