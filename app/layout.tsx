import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Innerwork Advisors Limited — NRI Services",
  description: "Standing beside NRIs—protecting your interests, always. Legal, property management, security, accounting & private investigations.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W1S0NH0J1B" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W1S0NH0J1B');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
