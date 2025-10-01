import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Reverse Marketplace",
  description: "Reversed marketplace for buyers and suppliers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="container my-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <footer className="container py-10 text-sm text-gray-500">2025 Reverse Marketplace - MVP</footer>
      </body>
    </html>
  );
}
