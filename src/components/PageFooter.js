import React from 'react';
import { backFooter, footerWrapper } from './layout.module.css'

export default function PageFooter() {
  return (
    <footer className={footerWrapper}>
      <div className={backFooter}>
          Fait avec NODE.JS + React :)
      </div>
    </footer>
  );
}
