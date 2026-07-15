import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiveFolder Preview - הורדה למק",
  description: "אפליקציית Mac להצגת Preview חי של פרויקטים מקומיים מתוך תיקייה.",
  icons: {
    icon: "/brand/app-icon.png",
    shortcut: "/brand/app-icon.png",
  },
  openGraph: {
    title: "LiveFolder Preview",
    description: "פותחים תיקייה ורואים את הפרויקט עובד.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
