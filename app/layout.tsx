import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  metadataBase: new URL("https://sunny-singh-sde-portfolio.vercel.app"),
  title: "SUNNY SINGH | Java & Backend Developer",
  description:
    "Sunny Singh — Computer Science graduate and software developer focused on Java, Spring Boot, secure REST APIs, React and meaningful software. Explore projects, experience and certifications.",
  openGraph: {
    title: "SUNNY SINGH — Software Developer",
    description: "Java. Spring Boot. Thoughtful engineering.",
    images: ["/portrait.webp"],
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
