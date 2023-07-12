import React, { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import SliderMain from "@/components/Slider";
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

      <main className="overflow-hidden relative min-h-[100dvh]">
        <section className="box absolute top-5 left-5 md:top-10 md:left-10 bg-opacity-50 bg-black p-5 z-10 text-white max-w-sm md:max-w-lg aspect-square">
          <div className="top">
            <h1 className="text-6xl uppercase spacing tracking-wider">
              <div className=" clear-both flex justify-end mb-1">Beals</div>
              <div className="clear-both">& Lyon</div>
            </h1>
            <h3 className="uppercase whitespace-nowrap text-xs	">
              Arquitectura · Paisajismo · Diseño Interior
            </h3>
          </div>

          <div className="bottom mt-20 text-xl absolute bottom-5 left-5">
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
