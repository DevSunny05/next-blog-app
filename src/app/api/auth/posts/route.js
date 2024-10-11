

import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET=async()=>{

    const POST_PER_PAGE=2
    try {
        const posts=await prisma.posts.findMany() 
        return new NextResponse(JSON.stringify(categories,{staus:200}))
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"something went wrong"},{staus:500}))
    }
}