import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer.tsx";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}