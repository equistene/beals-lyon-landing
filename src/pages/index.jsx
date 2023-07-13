import React, { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import SliderMain from "@/components/Slider";
import Logo from "@/components/Logo";
import LogoSvg from "/public/logo.svg";
import Link from "next/link";

export default function Home() {
  const dialogRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current.showModal();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <Head>
        <title>Beals Lyon Arquitectos</title>
      </Head>

      <main className="overflow-hidden relative min-h-[100svh] md:min-h-screen flex flex-column">
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

          <div className="bottom mt-20 text-md absolute bottom-3 left-3">
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
          <div className="flex uppercase gap-8 text-lg">
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
          className="dialog-class backdrop-grayscale backdrop-blur-xl max-w-sm md:max-w-2xl z-30 relative open:backdrop-blur-lg open:backdrop-saturate-100 "
        >
          <button
            onClick={handleClose}
            aria-label="close"
            className="absolute top-1 right-1 w-8 h-8 grid place-items-center bg-black text-white rounded-full text-xs hover:bg-gray-600 "
          >
            X
          </button>
          <div className="content p-4">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odit,
              temporibus possimus nobis sed nam debitis quod laudantium, id
              veritatis ad fugiat, ipsum eum deserunt ea! Nam, voluptatem minima
              architecto excepturi omnis velit fuga soluta eos totam ut
              asperiores vitae iste, natus quos cupiditate ab quod nemo
              consequuntur eligendi fugiat!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              amet aut possimus iusto incidunt, eius numquam ad hic adipisci, at
              suscipit eligendi soluta fugit optio exercitationem, aspernatur
              tempora expedita! Culpa saepe omnis officia porro ipsum corrupti
              reiciendis adipisci rem numquam, sint optio. Asperiores, est
              officiis?
            </p>
          </div>
        </dialog>

        <SliderMain />
      </main>
    </>
  );
}
