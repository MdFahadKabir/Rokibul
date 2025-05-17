import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { LanguageProvider } from "@/context/language-context";
import AnimatedCursor from "@/components/animated-cursor";
import AnimatedBubbles from "@/components/animated-bubbles";
import Header from "@/components/header";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import FloatingThemeSwitcher from "@/components/floating-theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professor Portfolio",
  description: "Personal website of Associate Professor",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AnimatedCursor />
            <AnimatedBubbles />
            <div className="flex flex-col min-h-screen relative z-10">
              <Header />
              <main className="flex-grow pb-16 md:pb-0 mt-10">{children}</main>
              <Footer className="hidden md:block" />
              <MobileNav />
              <FloatingThemeSwitcher />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
