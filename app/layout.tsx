import type { Metadata } from "next";
import { Inter } from "next/font/google"; // ou a fonte que preferir
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Luiz Iost | Lead Frontend & Full-Stack Engineer",
  description:
    "Full-Stack Software Engineer specializing in Java 25 (Spring Boot 4), NestJS 11, React 19 (Next.js), Angular 22 (SSR), RabbitMQ, Redis, AWS S3, and Prometheus/Grafana observability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning é necessário para o next-themes funcionar sem erros no console
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
