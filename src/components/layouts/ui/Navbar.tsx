import Image from "next/image";

import ProfileCard from "@/components/cards/ProfileCard";
import Logo from "@/components/Logo";
export default function Navbar() {
  return (
    <nav className="fixed flex h-auto w-full flex-col items-center justify-center p-(--navbar-margin) z-100">
      <div className="bg-primary-bg h-(--navbar-height) outline-primary-bg-outline w-full rounded-(--rounded-secondary) outline flex flex-row p-1 justify-between items-center
      backdrop-blur-primary-scaled">
        <div className="justify-center items-center flex-row flex p-1 w-auto h-full">
            <Logo size="small" scale={0.0175}/>
        </div>
        <ProfileCard/>
      </div>
    </nav>
  );
}
