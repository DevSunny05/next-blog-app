import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParam } = new URL(req.url);
  const page = searchParam.get("page");

  const POST_PER_PAGE = 2;
  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
