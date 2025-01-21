import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ifeoluwa's Portfolio",
  description:
    "A portfolio showcasing Ifeoluwa's frontend development skills, expertise, and projects. Explore professional work, personal projects, and technical accomplishments.",
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
  author: "Ifeoluwa",
  openGraph: {
    title: "Ifeoluwa's Portfolio",
    description:
      "Showcasing Ifeoluwa's skills, projects, and expertise in frontend development.",
    url: "https://ifeoluwa-portfolio.com",
    type: "website",
    images: [
      {
        url: "https://ifeoluwa-portfolio.com/og-image.jpg",
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
    creator: "@theactual001",
    images: ["https://ifeoluwa-portfolio.com/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="relative min-h-screen">
              <ScrollProgress />
              <CustomCursor />
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
