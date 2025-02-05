import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import { connectDB } from "@/backend/infrastructures/db/connect";

import { User } from "@/backend/infrastructures/db/models/user";
import connectMongoDB from "@/backend/infrastructures/db/config";



//register
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Validate inputs
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    return NextResponse.json(
      { message: "User created successfully", user: userWithoutPassword },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error in user registration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
