import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { profile, site } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

const description = profile.tagline;
const ogImage = { url: "/og.png", width: 1200, height: 630, alt: `${profile.name} — ${profile.title}` };

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: profile.name,
    locale: "en",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.title}`, description, images: [ogImage] },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
};

/**
 * Runs before paint. The site is dark unless the visitor has chosen light,
 * and the `js` class tells the CSS it is safe to hide content for reveals.
 */
const themeScript = `(function(){try{var d=document.documentElement;d.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark";d.classList.add("js");}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
