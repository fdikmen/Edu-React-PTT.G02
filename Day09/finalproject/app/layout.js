// Google fontlarından Inter fontunu import et
import { Inter } from "next/font/google";

// Genel CSS dosyalarını import et
import "@/styles/reset.css"; // CSS'i resetle
import "@/styles/global.css"; // Genel CSS stillerini tanımla

// Header ve Footer bileşenlerini import et
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Inter fontunu latin alfabesi için tanımla
const interFontFamily = Inter({ subsets: ['latin'] });

// Ana layout bileşeni
export default function RootLayout({ children }) {
  return (
    // Site dili İngilizce olarak tanımla ve Inter fontunu kullan
    <html lang="en" className={interFontFamily.className}>
      {/* // Body içinde ana site yapısını tanımla */}
      <body className="page-grid">
        <Header />
        <main>{children}</main> {/* // Çocuk bileşenleri yerleştir */}
        <Footer />
      </body>
    </html>
  );
}
