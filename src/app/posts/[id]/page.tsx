import { Metadata } from "next";
import Link from "next/link";
import React from "react";
interface Props {
  params: {
    id: number;
  };
}
export const metadata: Metadata = {
  title: `Single post id`,
};
function SinglePost(props: Props) {
  return (
    <div>
      page{JSON.stringify(props.params.id)}
      <Link href="/posts">Back</Link>
    </div>
  );
}

export default SinglePost;
