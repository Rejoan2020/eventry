import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Landing/Navbar";
import { dbConnect } from "@/services/mongo";
import { getAllEvents } from "./db/queries";
import { AuthProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eventry",
  description: "Discover and share events effortlessly with Eventry - your ultimate event management platform.",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  await getAllEvents();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
