import "~/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Providers from "./providers";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Topone – Full-Stack Developer",
  description:
    "Hi, I’m Topone. A full-stack developer redefining what’s possible in web development.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = JetBrains_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${font.className}`}>
      <body>
        <TRPCReactProvider>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
