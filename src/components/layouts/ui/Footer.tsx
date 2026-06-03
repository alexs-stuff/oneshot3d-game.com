import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";

type FooterItem = {
  name: string;
  href: string;
};
type FooterCategory = {
  header: string;
  items: FooterItem[];
};

type FooterSocial = {
  href: string;
  icon: string;
}
const items: FooterCategory[] = [
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
    icon: "fa7-brands:discord"
  },
  {
    href: "https://t.me/oneshot3d",
    icon: "fa7-brands:telegram"
  },
  {
    href: "https://tiktok.com/@al_ex427",
    icon: "fa7-brands:tiktok"
  },
    {
    href: "https://x.com/oneshot3d_game",
    icon: "fa7-brands:x-twitter"
  },
];


function FooterSocialIcon(social: FooterSocial) {
  return (
    <a href={social.href} className="group hover:bg-primary-bg-hover flex flex-row items-center justify-center transition-(--transition-primary) rounded-(--rounded-primary-small) p-2">
      <Icon icon={social.icon} className="text-2xl" />
    </a>
  );
}
export default function Footer() {
  return (
    <footer className="text-primary-fg font-terminus flex h-auto w-full flex-col items-center  bg-black p-4">
      <main className="flex h-full w-full max-w-[960px] flex-col items-center justify-center gap-8">
        <div className="flex flex-row items-start justify-center gap-16 w-full">
          {items.map((category) => (
            <div key={category.header}>
              <h2 className="text-lg text-secondary-fg pb-2">{category.header.toUpperCase()}</h2>
              <ul>
                {category.items.map((item) => (
                  <li key={item.href} className="pb-1">
                    <a className="text-[18px]" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row items-center justify-between py-2">
        <Logo scale={0.175}/>
        <div className="flex flex-row items-center justify-center">
        {socials.map((social) => (
          <FooterSocialIcon key={social.href} {...social}/>
        ))}
        </div>
      </div>

      </main>

      
    </footer>
  );
}
