"use client";

import useUser from "@/hooks/useUser";
import Image from "next/image";

export default function ProfileCard() {
  const { user, loading } = useUser();

  return (
    <div className="flex flex-row items-center gap-2 px-2 py-2">
      <div
        className={`h-3 w-24 origin-right rounded-(--rounded-secondary) ${loading ? "bg-placeholder-primary animate-size" : ""}`}
      />
      <Image
        src={user ?? "/assets/img/transparent.png"}
        width={1}
        height={1}
        alt=""
        className={`h-9 w-9 origin-left rounded-full ${loading ? "bg-placeholder-primary animate-size" : ""}`}></Image>
    </div>
  );
}
