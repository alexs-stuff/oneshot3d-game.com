

import ProfileCard from "@/components/cards/ProfileCard";
import Logo from "@/components/Logo";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed z-100 flex h-auto w-full flex-col items-center justify-center p-(--navbar-margin)">
      <div className="bg-primary-bg outline-primary-bg-outline backdrop-blur-primary-scaled flex h-(--navbar-height) w-full flex-row items-center justify-between rounded-(--rounded-secondary) p-1 outline">
        <div className="flex h-full w-auto flex-row items-center justify-center">
         
         <Link href="/" className="hover:bg-primary-bg-hover transition-(--transition-primary) p-[2px] rounded-(--rounded-primary-small)">
          <Logo size="small" scale={0.0175} />
         </Link>
         
        </div>
        <ProfileCard />
      </div>
    </nav>
  );
}
