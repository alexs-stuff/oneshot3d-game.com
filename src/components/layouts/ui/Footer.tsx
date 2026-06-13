import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
import FooterCategory from "./FooterCategory";

type FooterItem = {
  name: string;
  href: string;
};
export type FooterCategory = {
  header: string;
  items: FooterItem[];
};

type FooterSocial = {
  href: string;
  icon: string;
};
const items: FooterCategory[] = [
  {
    header: "ONESHOT 3D",
    items: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Download",
        href: "/download",
      },
      {
        name: "Donate ❤️",
        href: "/donate",
      },
    ],
  },
  {
    header: "Support",
    items: [
      {
        name: "Docs",
        href: "/docs",
      },
      {
        name: "Forums",
        href: "https://forums.oneshot3d-game.com",
      },
      {
        name: "Contact Us",
        href: "mailto:support@alex427.com",
      },
    ],
  },

  {
    header: "Legal",
    items: [
      {
        name: "Terms of Service",
        href: "/legal/terms",
      },
      {
        name: "Privacy Policy",
        href: "/legal/privacy",
      },
      {
        name: "Refund Policy",
        href: "/legal/refunds",
      },
    ],
  },
];

const socials: FooterSocial[] = [
  {
    href: "https://discord.gg/E8DnA6ZjJP",
    icon: "fa7-brands:discord",
  },
  {
    href: "https://t.me/oneshot3d",
    icon: "fa7-brands:telegram",
  },
  {
    href: "https://tiktok.com/@al_ex427",
    icon: "fa7-brands:tiktok",
  },
  {
    href: "https://x.com/oneshot3d_game",
    icon: "fa7-brands:x-twitter",
  },
];

function FooterSocialIcon(social: FooterSocial) {
  return (
    <a
      href={social.href}
      className="group hover:bg-primary-bg-hover xs:p-2 flex flex-row items-center justify-center rounded-(--rounded-primary-small) p-1 transition-(--transition-primary)">
      <Icon icon={social.icon} className="text-2xl" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="text-primary-fg font-terminus flex h-auto w-full flex-col items-center bg-black px-8">
      <main className="flex h-full w-full max-w-[960px] flex-col items-center justify-center sm:gap-4">
        <div className="border-b-primary-fg/25 xs:gap-4 xs:flex-row flex w-full flex-col items-center justify-between border-b py-4 pt-5 sm:gap-0">
          <Logo scale={0.15} />
          <div className="gap xs:gap-0 flex flex-row items-center justify-center">
            {socials.map((social) => (
              <FooterSocialIcon key={social.href} {...social} />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-0 sm:flex-row sm:flex-wrap sm:items-start sm:gap-16">
          {items.map((category) => (
            <FooterCategory key={category.header} {...category} />
          ))}
        </div>

        <div className="border-t-primary-fg/25 flex w-full flex-row items-center justify-center border-t pt-4 pb-4 text-center">
          <span className="text-secondary-fg xs:text-left w-full text-center text-[12px]">
            Copyright &copy; Alex&apos;Stuff {new Date().getFullYear()}
            <br />
            Alex&apos;s Stuff is NOT affiliated with Future Cat Games. <br />{" "}
            Everything related to <b>OneShot</b> belongs to them.
          </span>
        </div>
      </main>
      {process.env.NODE_ENV == "development" && (
        <span>
          Running in DEVELOPMENT MODE. CONTACT SITE OWNER IF YOU SEE THIS
        </span>
      )}
    </footer>
  );
}
