import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/helper/scroll-to-top";
import ToastProvider from "./components/ToastProvider";
import GTM from "./components/GTM";

import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Abu Said - Software Developer",
  description:
    "This is the portfolio of Abu Said. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />

        {/* GTM client component */}
        <GTM />
      </body>
    </html>
  );
}
