export const metadata = {
  title: "Bhavana Gutta | AI & Full-Stack Portfolio",
  description: "Portfolio of Bhavana Gutta, AI Researcher and Full-Stack Developer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
