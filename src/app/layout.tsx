import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Cubana2.0",
  description: "Gestión empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
