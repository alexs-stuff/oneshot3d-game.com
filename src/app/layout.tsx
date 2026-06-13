import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/ui/Navbar";
import background from "#assets/background.png";
import Image from "next/image";
import Footer from "@/components/layouts/ui/Footer";
import TwemojiProvider from "@/components/providers/TwemojiProvider";
import NotificationProvider from "@/components/providers/NotificationProvider";

export const metadata: Metadata = {
  title: "OneShot 3D",
  description: "basically oneshot but its in 3d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh min-h-dvh bg-black">
      <head>
        <link rel="icon" href="/assets/img/os3d/IconOG.png" sizes="any" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
        window.addEventListener('load', () => {
          document.documentElement.style.setProperty('--page-zoom-internal', window.devicePixelRatio);
          window.addEventListener('resize', () => {
            document.documentElement.style.setProperty('--page-zoom-internal', window.devicePixelRatio);
          });
        });
      `,
          }}
        />
      </head>
      <body className="flex h-auto min-h-dvh flex-col">
        <Image
          src={background}
          alt=""
          className="blur-primary-scaled fixed inset-0 -z-100 h-screen w-screen scale-110 object-cover brightness-70 select-none"
        />
        <TwemojiProvider>
          <NotificationProvider>
            <Navbar />
            <div className="font-terminus flex min-h-dvh flex-col justify-start">
              <main className="text-primary-fg flex h-full w-full flex-1 flex-col items-center">
                {children}
              </main>
            </div>
            <Footer />
          </NotificationProvider>
        </TwemojiProvider>
      </body>
    </html>
  );
}
