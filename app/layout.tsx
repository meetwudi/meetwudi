import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The D note",
  description: "Dispatches on product, craft, and building useful things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
