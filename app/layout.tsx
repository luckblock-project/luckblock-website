import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Luckblock",
  description: "Audit smart contracts thanks to AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className}`}>
        <Navbar />
        <div className="page">{children}</div>
        <Footer />
        <ToastContainer
          position="bottom-right"
          theme="dark" />
      </body>
    </html>
  );
}
