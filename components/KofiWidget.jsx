"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const KofiWidget = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.kofiWidgetOverlay) {
      window.kofiWidgetOverlay.draw('lupleg', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support Us',
        'floating-chat.donateButton.background-color': '#00b9fe',
        'floating-chat.donateButton.text-color': '#fff'
      });
    }
  }, []);

  return (
    <>
      <Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" strategy="lazyOnload" />
    </>
  );
};

export default KofiWidget;