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
          <div className="sticky top-0 w-full text-right flex justify-end z-20">
            <button
              onClick={handleClose}
              aria-label="close"
              className="relative top-1 right-1 w-8 h-8 grid place-items-center bg-black text-white rounded-full text-xs hover:bg-gray-600 z-10 "
            >
              X
            </button>
          </div>
          <div className="content relative block z-0 py-3 px-4 [&>p]:mb-4 [&>p]:text-[#444]">
            {/* <Image
              src={LogoSvg}
              alt="Equipo"
              width="400"
              height="400"
              quality={100}
              className="mb-5 invert"
            /> */}

            <p>
              Los Conquistadores 2106-A <br /> 7520238 Providencia <br />
              Santiago, Chile <br />
              <Link
                className="hover:underline"
                target="_blank"
                href="tel:+56966558756"
              >
                +56 9 6655 8756
              </Link>
              <br />{" "}
              <Link
                className="hover:underline"
                href="https://www.beals-lyon.cl"
                target="_blank"
              >
                www.beals-lyon.cl
              </Link>
              <br />
              <Link
                className="hover:underline"
                href="mailto:info@beals-lyon.cl"
                target="_blank"
              >
                info@beals-lyon.cl
              </Link>
            </p>

            <Image
              src="/equipo.jpg"
              alt="Equipo"
              width="400"
              height="400"
              quality={100}
              className="my-5"
            />

            <p>
              Loreto Lyon y Alejandro Beals fundan el estudio{" "}
              <strong className="font-semibold font-sans">
                BEALS & LYON ARQUITECTOS
              </strong>{" "}
              atención al contexto, los materiales y los detalles, nuestra
              experiencia abarca desde proyectos de paisaje e infraestructura,
              edificios y espacios públicos, hasta instalaciones temporales y
              diseño de interiores. Nuestra aproximación al proyecto combina la
              investigación con un fuerte enfoque en el hacer y el construir, y
              tiene como objetivo principal el contribuir a la vida de las
              personas y comunidades que habitan nuestros proyectos, brindando
              experiencias significativas y memorables en ellos.
            </p>
            <p>
              Nuestro trabajo incluye casas particulares, la instalación
              ganadora de la versión chilena del YAP 2013 (MoMA – Young
              Architects Program PS1) y propuestas ganadoras para edificios
              públicos, como el municipio de Nancagua en la zona central de
              Chile, la Nueva Biblioteca del Congreso Nacional y el Edificio
              Estación Metro Plaza de Armas, estos dos últimos en pleno centro
              histórico de Santiago.
            </p>
            <p>
              Nuestro trabajo ha sido reconocido con varias distinciones, como
              el Premio Obra del Año de Archdaily y el Premio Oscar Niemeyer
              para la Arquitectura Latinoamericana, ambos por el Nuevo Municipio
              en Nancagua. En el año 2016 Ediciones ARQ publica Beals Lyon
              Arquitectos: Vacíos Públicos, monografía dedicada a obras de
              arquitectura pública. En el 2023 exponemos en la Bienal de Venecia
              representando a Chile con el pabellón Moving Ecologies / Ecologías
              en Movimiento.
            </p>
            <p>
              En paralelo a nuestra práctica como arquitectos, hemos enseñado la
              escuela de Architecture, Art and Planning de la Universidad de
              Cornell, en la IUAV de Venecia, Scola da Cidade en Sao Paulo,
              Universidad Católica del Perú y Universidad Católica de Chile,
              donde actualmente impartimos un estudio de postgrado del MARQ.
            </p>
            <p>
              <strong className="font-semibold font-sans">
                ALEJANDRO BEALS
              </strong>{" "}
              Arquitecto de la Pontificia Universidad Católica de Chile (2001) y
              Master of Philosophy (MPhil) in Architecture del Royal College of
              Art (RCA), 2012, bajo la supervision del profesor Nigel Coates.
            </p>
            <p>
              <strong className="font-semibold font-sans">LORETO LYON</strong>{" "}
              Arquitecto de la Pontificia Universidad Católica de Chile (2005) y
              Master of Sciences (MSc) in Environmental Design and Engineering
              de Bartlett, University College London (UCL), 2011. Directora y
              Curadora de la XXII Bienal de Arquitectura en Chile, Habitats
              Vulnerables (2023). El año 2023 es designada como jurado del
              premio Holcim Awards. En la actualidad dirige la escuela de
              Arquitectura de la Universidad San Sebastián, en Santiago.
            </p>
          </div>
        </dialog>

        <SliderMain />
      </main>
    </>
  );
}
