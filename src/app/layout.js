import { montserrat } from "@/misc/fonts";
import "./globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
