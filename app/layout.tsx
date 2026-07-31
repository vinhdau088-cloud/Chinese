import type { Metadata } from "next";
import "./globals.css";
import AuthProvider 
from "@/components/AuthProvider";
export const metadata: Metadata = {
  title: "ChineseMaster",
  description: "Học tiếng Trung HSK & TOCFL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <AuthProvider>

{children}

</AuthProvider>
      </body>
    </html>
  );
}
