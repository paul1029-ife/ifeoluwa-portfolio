import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  metadataBase: new URL("https://ifeoluwa-portfolio-five.vercel.app"),
  title: "Ifeoluwa's Portfolio",
  description: "Portfolio showcasing frontend development skills and projects",
  keywords: [
    "Ifeoluwa",
    "Frontend Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "React",
    "Projects",
    "Tech Skills",
    "Developer Portfolio",
  ],
  author: "Ifeoluwa Agbogun",
  openGraph: {
    title: "Ifeoluwa's Portfolio",
    description:
      "Showcasing Ifeoluwa's skills, projects, and expertise in frontend development.",
    url: "https://ifeoluwa-portfolio-five.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpeg", // Resolved with metadataBase
        alt: "Ifeoluwa's Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifeoluwa's Portfolio",
    description:
      "Discover Ifeoluwa's work and projects in frontend development.",
    images: ["/images/og-image.jpeg"], // Resolved with metadataBase
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
      </body>
    </html>
  );
}
