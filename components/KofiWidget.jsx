"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const KofiWidget = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.kofiwidget2) {
      window.kofiwidget2.init('Support Us', '#f3a833', 'G2G1T1VRK');
      window.kofiwidget2.draw();
    }
  }, []);

  return (
    <>
      <Script src="https://storage.ko-fi.com/cdn/widget/Widget_2.js" strategy="lazyOnload" />
    </>
  );
};

export default KofiWidget;