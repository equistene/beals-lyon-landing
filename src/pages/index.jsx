import Image from "next/image";
import Head from "next/head";
import SliderMain from "@/components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beals Lyon Arquitectos</title>
      </Head>

      <main className="overflow-hidden relative min-h-screen">
        <section className="box absolute top-10 left-10 bg-opacity-50 bg-black p-5 z-10 text-white">
          <div className="top">
            <h1>Beals & Lyon</h1>
            <h3 className="uppercase">
              Arquitectura · Paisajismo · Diseño Interior
            </h3>
          </div>

          <div className="bottom mt-20 text-xl">
            <p>
              mail:{" "}
              <Link
                className="hover:underline"
                href="mailto:info@beals-lyon.cl"
                target="_blank"
              >
                info@beals-lyon.cl
              </Link>
            </p>
            <p>
              tel:{" "}
              <Link className="hover:underline" href="tel:+56966558756">
                (+56) 9 6655 87 56
              </Link>
            </p>
            <p>
              ig:{" "}
              <Link
                className="hover:underline"
                href="https://www.instagram.com/beals_lyon/"
              >
                @beals_lyon
              </Link>
            </p>
          </div>
        </section>

        <section className="menu absolute bottom-10 left-10 z-10">
          <div className="flex uppercase gap-8 text-2xl">
            <button className="text-white uppercase">About</button>
            <Link
              className="text-white uppercase "
              href="mailto:info@beals-lyon.cl"
              target="_blank"
            >
              Contact
            </Link>
          </div>
        </section>

        <SliderMain />
      </main>
    </>
  );
}
