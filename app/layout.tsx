import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  metadataBase: new URL("https://ifeoluwa.tech"),
  title: "Ifeoluwa Agbogun | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Ifeoluwa Agbogun — a frontend developer skilled in React, TypeScript, and modern web technologies. View projects, case studies, and development expertise.",
  keywords: [
    "Ifeoluwa Agbogun",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Software Engineer",
    "Web Portfolio",
    "Frontend Projects",
    "UI Developer",
    "Frontend Development",
  ],
  author: "Ifeoluwa Agbogun",
  openGraph: {
    title: "Ifeoluwa Agbogun | Frontend Developer Portfolio",
    description:
      "Dive into Ifeoluwa Agbogun’s professional portfolio featuring modern frontend development, UI design, and full-stack projects.",
    url: "https://ifeoluwa.tech/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpeg",
        alt: "Ifeoluwa Agbogun's Portfolio Screenshot",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifeoluwa Agbogun | Frontend Developer Portfolio",
    description:
      "Discover modern web development projects and skills by Ifeoluwa Agbogun, a frontend developer proficient in React and TypeScript.",
    images: ["/images/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="relative min-h-screen">
              <ScrollProgress />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
