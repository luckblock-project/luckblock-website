import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import "@/styles/globals.scss";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Blockrover",
  description: "Audit smart contracts thanks to AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} page`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
