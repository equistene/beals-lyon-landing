import "@/styles/globals.css";
import localFont from "next/font/local";

const gothamMedium = localFont({ src: "./fonts/Gotham-Medium.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <main className={gothamMedium.className}>
      <Component {...pageProps} />
    </main>
  );
}
