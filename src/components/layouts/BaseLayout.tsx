import { twMerge } from "tailwind-merge";

export default function BaseLayout({
  className,
  children,
}: Readonly<{ className?: string; children: React.ReactNode }>) {
  return (
    <div
      className={twMerge(
        "flex w-full max-w-[1368px] flex-col px-4 pt-4",
        className,
      )}>
      {children}
    </div>
  );
}
