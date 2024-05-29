import { Card, CardTitle, buttonVariants } from "@/components/ui";

import { RetroGrid } from "@/components/customs";
import Link from "next/link";
import { reader } from "../lib/reader";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div className="flex flex-col gap-5 z-50 w-full h-screen">
      <RetroGrid className="z-0" />
      <div className="flex flex-col gap-10 z-50 container h-full pt-40">
        <div className="flex flex-col w-full text-center gap-5 place-self-start">
          <h1 className="text-3xl font-bold">Keystatic ⚡️ Shadcn/ui</h1>
          <div className="">
          <Link className={buttonVariants()} href="/keystatic">
              Click here to visit the Admin UI
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 border p-5 rounded-md w-full bg-background">
          <h2 className="text-2xl font-bold">Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 z-50">
            {posts.map((post) => (
              <Card key={post.slug} className="p-5 shadow-none w-full">
                <Link key={post.slug} href={`/${post.slug}`}>
                  <CardTitle>{post.entry.title}</CardTitle>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
