import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Nav from "./_components/navbar";
import Ascii from "./_components/ascii";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Nav />
      {/* <div className="mt-4 flex w-full justify-center text-sm leading-none text-primary"> */}
      {/*   <Ascii /> */}
      {/* </div> */}
    </HydrateClient>
  );
}
