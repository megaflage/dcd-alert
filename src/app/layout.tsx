import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import TopNav from "../components/nav/TopNav";

export const metadata: Metadata = {
  title: "DCD LOG",
  description: "Dropped something? ",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNav />
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
