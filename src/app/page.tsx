import BaseLayout from "@/components/layouts/BaseLayout";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <BaseLayout className="max-w-full items-center justify-center gap-8 p-0 text-center">
      <div className="fixed top-0 -z-20 h-full w-full bg-black/50" />
      <div className="relative h-[296px] w-full overflow-hidden bg-black group">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/assets/header-video.mp4"
          className="absolute inset-0 h-full w-full object-cover opacity-50 blur-secondary-scaled group-hover:opacity-90 group-hover:blur-none  transition-(--transition-primary)"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center group-hover:opacity-0 transition-(--transition-primary)">
          <Logo size="large" scale={0.4} />
        </div>
      </div>

      <h1 className="w-full text-center text-3xl">
        it&apos;s basically <a href="https://oneshot-game.com">oneshot</a> in 3d
      </h1>
    </BaseLayout>
  );
}
