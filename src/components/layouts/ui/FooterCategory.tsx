"use client";

import { useState } from "react";
import { type FooterCategory } from "./Footer";

export default function FooterCategory(category: FooterCategory) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-primary-fg/25 w-full border-b py-3 sm:w-auto sm:border-none">
      <button
        onClick={() => setOpen((o) => !o)}
        className="justify-betweensm:cursor-default flex w-full items-center">
        <h2 className="text-secondary-fg text-lg sm:text-left">
          {category.header.toUpperCase()}
        </h2>
      </button>
      <ul
        className={`overflow-hidden transition-all sm:block sm:max-h-none ${
          open ? "max-h-96" : "max-h-0"
        }`}>
        {category.items.map((item) => (
          <li key={item.href} className="pb-1">
            <a className="text-[18px]" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
