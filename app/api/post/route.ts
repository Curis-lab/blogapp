import connectMongoDB from "@/backend/infrastructures/db/config";
import Post from "@/backend/infrastructures/db/models/post";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content, author, datepublished, category, links, thumbnail } =
    await request.json();
  await connectMongoDB();

  await Post.create({
    title,
    content,
    author,
    datepublished,
    category,
    links,
    thumbnail,
  });

  return NextResponse.json(
    { message: "Post created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();

  const posts = await Post.find();
  return NextResponse.json({ posts }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Post.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Post deleted successfully" },
    { status: 200 }
  );
}
