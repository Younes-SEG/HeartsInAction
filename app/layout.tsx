import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Hearts in Action - UOttawa",
  description: "Hearts in Action Club at University of Ottawa - Making a difference through fundraising and community engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
