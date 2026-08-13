import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata = {
  title: "Zaki ur Rehman | Full-Stack Developer",
  description: "Professional portfolio showcasing design-led web development and production-ready product work.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
