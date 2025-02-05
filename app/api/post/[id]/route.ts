import connectMongoDB from "@/backend/infrastructures/db/config";
import Post from "@/backend/infrastructures/db/models/post";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {title, content} = await request.json();

    await connectMongoDB();
    await Post.findByIdAndUpdate(id, {title, content});

    return NextResponse.json({message: 'Post updated successfully'}, {status: 200});
}
