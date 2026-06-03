"use client";

import useUser from "@/hooks/useUser";
import Image from "next/image";

export default function ProfileCard() {
    const {user, loading} = useUser();



    return (
        <div className="items-center  flex-row flex px-2 py-2 gap-2">
            <div className={`rounded-(--rounded-secondary) h-3 w-24 origin-right ${loading ? 'bg-placeholder-primary animate-size ' : ''}`}/>
            <Image src="/assets/img/transparent.png" width={1} height={1} alt="" className={`rounded-full w-9 h-9 origin-left ${loading ? 'bg-placeholder-primary animate-size ' : ''}`}></Image>
        </div>
    )
}