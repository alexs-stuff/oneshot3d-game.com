import { twMerge } from "tailwind-merge";

export default function BaseLayout({
  className,
  children,
  bypassTopMargin = false,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
  bypassTopMargin?: boolean;
}>) {
  return (
    <div
      className={twMerge(
        `${bypassTopMargin ? "" : "mt-[calc(var(--navbar-margin)+var(--navbar-height))]"} flex w-full max-w-[1368px] flex-col px-4 pt-4`,
        className,
      )}>
      {children}
    </div>
  );
}
