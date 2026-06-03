import { twMerge } from "tailwind-merge";

export default function BaseLayout({ className, children }: Readonly<{className?: string, children: React.ReactNode}>) {
    return (
        <div className={twMerge("max-w-[1368px] px-4 w-full flex-col flex pt-4", className)}>
            {children}
        </div>
    )
}