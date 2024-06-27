import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <h1>Header</h1>
        {children}
        <h1>Footers</h1>
      </body>
    </html>
  );
}
