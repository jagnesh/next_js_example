import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic"; // To make route dynamic
function Posts() {
  return (
    <div>
      <h1 className="text-4xl md:text:5xl font-bold mb-5">All posts</h1>
      <Link href="/posts/1">Post</Link>
    </div>
  );
}

export default Posts;
//
