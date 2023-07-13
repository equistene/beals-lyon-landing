import "@/styles/globals.css";
import localFont from "next/font/local";

const gothamBook = localFont({ src: "./fonts/Gotham-Book.otf" });
const gothamMedium = localFont({ src: "./fonts/Gotham-Medium.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <main className={gothamBook.className}>
      <Component {...pageProps} />
    </main>
  );
}
