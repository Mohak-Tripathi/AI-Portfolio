import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohak's AI Portfolio | Machine Learning & AI Projects",
  description: "Portfolio showcasing 12+ AI and machine learning projects built during an intensive AI bootcamp. Explore innovative solutions in NLP, computer vision, and more.",
  keywords: ["AI Portfolio", "Machine Learning", "Data Science", "Python", "Streamlit", "Deep Learning"],
  authors: [{ name: "Mohak" }],
  openGraph: {
    title: "Mohak's AI Portfolio",
    description: "Explore my AI and machine learning projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

