import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css"
import '@fontsource/roboto/700.css';

import "./globals.css"
import NavbarSite from "@/component/Navbar";

export const metadata: Metadata = {
  title: "Eric Yao",
  description: "Création portfolio développeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/me-bg.png" type="image/*" />
        <link rel="icon" href="/path-to-your-icon/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
      </head>
      <body>
        <NavbarSite />
        {children}
      </body>
    </html>
  );
}
