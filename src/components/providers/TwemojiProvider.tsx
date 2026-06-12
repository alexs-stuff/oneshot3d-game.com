'use client';
import { useEffect } from 'react';
import twemoji from '@twemoji/api';

export default function TwemojiProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg',
    });
  }, [children]);
  return <>{children}</>;
}