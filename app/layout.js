import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "HostelFlow - Hostel Management System",
  description: "HostelFlow - Hostel Management System using Next.js and NeonDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-gray-900 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}