import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROYAL OS | Autonomous Business Operations",
  description: "Hackathon demo for governed AI business operations."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
