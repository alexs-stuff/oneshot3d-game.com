import BaseLayout from "@/components/layouts/BaseLayout";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <BaseLayout className="max-w-full items-center justify-center gap-8 p-0 text-center">
      <div className="fixed top-0 -z-20 h-full w-full bg-black/50" />
      <div className="group relative h-[296px] w-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/assets/header-video.mp4"
          className="blur-secondary-scaled absolute inset-0 h-full w-full object-cover opacity-50 transition-(--transition-primary) group-hover:opacity-90 group-hover:blur-none"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center transition-(--transition-primary) group-hover:opacity-0">
          <Logo size="large" scale={0.4} />
        </div>
      </div>

      <section id="about">
        <h1 className="w-full text-center text-3xl">
          it&apos;s basically <a href="https://oneshot-game.com">oneshot</a> in
          3d
        </h1>
      </section>
    </BaseLayout>
  );
}
