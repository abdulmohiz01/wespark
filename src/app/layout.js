import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const plainLight = localFont({
  src: [
    {
      path: '../../public/fonts/plain-light.ttf',
    }
  ],
  variable: '--font-plain-light',

});

const silkSerif = localFont({
  src: [
    {
      path: '../../public/fonts/silkserif-regularitalic.ttf',
    }],
  variable: '--font-silk-serif',
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plainLight.variable} ${silkSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
