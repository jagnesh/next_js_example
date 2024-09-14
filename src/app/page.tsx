import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Image
        src="https://brainsbing.com/assets/img/vertical-logo.png"
        alt="logo"
        width={200}
        height={64}
      />
      <Link href="/posts">Posts</Link>
    </main>
  );
}
