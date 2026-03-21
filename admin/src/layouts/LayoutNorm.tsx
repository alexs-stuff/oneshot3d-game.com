
import type { ReactNode } from "react";
import wallpaperBg from "../assets/wallpaper.png";

interface LayoutNormProps {
    customClassName?: string

    children: ReactNode
}

export default function LayoutNorm({children, customClassName}: LayoutNormProps) {
  return (
    <>
      <img
        src={wallpaperBg}
        alt=""
        className="fixed select-none inset-0 w-screen h-screen object-cover -z-50 blur-lg scale-110"
      />
      <div className="fixed inset-0 bg-black/40 -z-49"></div>

      <div className={`flex flex-col justify-start items-center`}>
        <main
          className={`flex flex-col  text-white w-full min-h-screen h-auto ${customClassName != null ? customClassName : ""}`}
        >
          {children}
        </main>
      </div>
    </>
  );
}
