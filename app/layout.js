import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Ahsan | Personal Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <script src="/mobile-fix.js" async></script>
        <style>{`
          @media (max-width: 767px) {
            body, html {
              width: 100% !important;
              overflow-x: hidden !important;
              padding: 0 !important;
              margin: 0 !important;
            }
          }
        `}</style>
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white w-full`}
        style={{ maxWidth: '100vw' }}
      >
        {children}
      </body>
    </html>
  );
}
