import React, { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import SliderMain from "@/components/Slider";
import Logo from "@/components/Logo";
import LogoSvg from "/public/logo.svg";
import Link from "next/link";
import { ContentES, ContentEN } from "@/components/Content";

export default function Home() {
  const [currentContent, setCurrentContent] = useState("es");

  const dialogRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current.showModal();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  const handleLang = (e) => {
    e.preventDefault();

    if (currentContent === "es") {
      setCurrentContent("en");
    } else {
      setCurrentContent("es");
    }
  };

  return (
    <>
      <Head>
        <title>Beals Lyon Arquitectos</title>
      </Head>

      <main className="overflow-hidden relative full-vh flex flex-column">
        <section className="box absolute top-3 left-3 md:top-5 md:left-5 bg-opacity-30 bg-black p-5 z-10 text-white max-w-sm md:max-w-lg aspect-square">
          <div className="top">
            {/* <Logo /> */}
            <Image
              src={LogoSvg}
              alt="Logo"
              width="300"
              height="100"
              className="w-full mb-1"
            />
            <h3 className="uppercase whitespace-nowrap text-xs">
              Arquitectura · Paisajismo · Diseño Interior
            </h3>
          </div>

          <div className="bottom mt-10 text-md absolute bottom-3 left-3 md:bottom-5 md:left-5">
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

        <section className="menu absolute bottom-3 left-3 z-10 md:bottom-5 md:left-5">
          <div className="flex uppercase gap-8 text-lg ">
            <button
              onClick={handleOpen}
              className="text-white uppercase hover:underline "
            >
              About
            </button>
            <Link
              className="text-white uppercase hover:underline"
              href="mailto:info@beals-lyon.cl"
              target="_blank"
            >
              Contact
            </Link>
          </div>
        </section>

        <dialog
          ref={dialogRef}
          className="dialog-class p-0 backdrop-grayscale backdrop-blur-xl max-w-sm md:max-w-3xl h-3/4 z-30 relative open:backdrop-blur-lg open:backdrop-saturate-100 "
        >
          <div className="sticky top-0 w-full text-right flex justify-between z-20 p-3 bg-white">
            <button onClick={handleLang} className="hover:underline">
              {currentContent === "es" ? "Read in english" : "Leer en español"}
            </button>
            <button
              onClick={handleClose}
              aria-label="close"
              className="relative top-1 right-1 w-8 h-8 grid place-items-center bg-black text-white rounded-full text-xs hover:bg-gray-600 z-10 "
            >
              X
            </button>
          </div>

          {currentContent === "es" ? <ContentES /> : <ContentEN />}
        </dialog>

        <SliderMain />
      </main>
    </>
  );
}
