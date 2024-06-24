//layout

import { Inter } from "next/font/google";
import "./module.pages.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Hills",
  description: "We believe your Vacations is your Choice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
