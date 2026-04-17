import "./globals.css";

export const metadata = {
  title: "HLS Global Group",
  description: "Accountants and Global Business Advisors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
