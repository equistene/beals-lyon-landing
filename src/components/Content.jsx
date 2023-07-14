import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ContentES() {
  return (
    <>
      <div className="content relative block z-0 py-3 px-4 [&>p]:mb-4 [&>p]:text-[#444]">
        {/* <Image
        src={LogoSvg}
        alt="Equipo"
        width="400"
        height="400"
        quality={100}
        className="mb-5 invert"
      /> */}

        <p className="uppercase font-sans font-semibold">
          BEALS & LYON ARQUITECTOS
        </p>

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
          edificios y espacios públicos, hasta instalaciones temporales y diseño
          de interiores. Nuestra aproximación al proyecto combina la
          investigación con un fuerte enfoque en el hacer y el construir, y
          tiene como objetivo principal el contribuir a la vida de las personas
          y comunidades que habitan nuestros proyectos, brindando experiencias
          significativas y memorables en ellos.
        </p>
        <p>
          Nuestro trabajo incluye casas particulares, la instalación ganadora de
          la versión chilena del YAP 2013 (MoMA – Young Architects Program PS1)
          y propuestas ganadoras para edificios públicos, como el municipio de
          Nancagua en la zona central de Chile, la Nueva Biblioteca del Congreso
          Nacional y el Edificio Estación Metro Plaza de Armas, estos dos
          últimos en pleno centro histórico de Santiago.
        </p>
        <p>
          Nuestro trabajo ha sido reconocido con varias distinciones, como el
          <em> Premio Obra del Año</em> de Archdaily y el{" "}
          <em> Premio Oscar Niemeyer para la Arquitectura Latinoamericana</em>,
          ambos por el Nuevo Municipio en Nancagua. En el año 2016 Ediciones ARQ
          publica <em> Beals Lyon Arquitectos: Vacíos Públicos</em>, monografía
          dedicada a obras de arquitectura pública. En el 2023 exponemos en la
          Bienal de Venecia representando a Chile con el pabellón
          <em> Moving Ecologies / Ecologías en Movimiento</em>.
        </p>
        <p>
          En paralelo a nuestra práctica como arquitectos, hemos enseñado la
          escuela de Architecture, Art and Planning de la Universidad de
          Cornell, en la IUAV de Venecia, Scola da Cidade en Sao Paulo,
          Universidad Católica del Perú y Universidad Católica de Chile, donde
          actualmente impartimos un estudio de postgrado del MARQ.
        </p>
        <p>
          <strong className="font-semibold font-sans">ALEJANDRO BEALS</strong>{" "}
          Arquitecto de la Pontificia Universidad Católica de Chile (2001) y
          Master of Philosophy (MPhil) in Architecture del Royal College of Art
          (RCA), 2012, bajo la supervision del profesor Nigel Coates.
        </p>
        <p>
          <strong className="font-semibold font-sans">LORETO LYON</strong>{" "}
          Arquitecto de la Pontificia Universidad Católica de Chile (2005) y
          Master of Sciences (MSc) in Environmental Design and Engineering de
          Bartlett, University College London (UCL), 2011. Directora y Curadora
          de la XXII Bienal de Arquitectura en Chile,{" "}
          <em> Habitats Vulnerables</em>
          (2023). El año 2023 es designada como jurado del premio Holcim Awards.
          En la actualidad dirige la escuela de Arquitectura de la Universidad
          San Sebastián, en Santiago.
        </p>
      </div>
    </>
  );
}

export function ContentEN() {
  return (
    <>
      <div className="content relative block z-0 py-3 px-4 [&>p]:mb-4 [&>p]:text-[#444]">
        {/* <Image
          src={LogoSvg}
          alt="Equipo"
          width="400"
          height="400"
          quality={100}
          className="mb-5 invert"
        /> */}

        <p className="uppercase font-sans font-semibold">
          BEALS & LYON ARQUITECTOS
        </p>
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
          Loreto Lyon and Alejandro Beals established the studio{" "}
          <strong className="font-semibold font-sans">
            BEALS & LYON ARQUITECTOS
          </strong>{" "}
          in Santiago de Chile in 2012. An independent practice distinguished by
          careful attention to context, materials and details, our experience
          ranges from projects of landscape and infrastructure, public building
          and spaces, to temporary installations and interior design. Our
          approach to architecture combines research with a strong focus on
          making and building, and aims to contribute to the lives of people and
          communities who inhabit our projects, providing meaningful and
          memorable experiences in them.
        </p>
        <p>
          Our work includes private houses, the winning installation for the
          Chilean version of the YAP 2013 (MoMA – PS1 Young Architects’ Program)
          and winning proposals for public buildings, such as a town hall in
          Central Chile in Nancagua, the New Library of the National Congress
          and a Metro Station, this last two right in Santiago’s historical
          centre.
        </p>
        <p>
          Our practice has been recognized with various design awards, like the
          Archdaily’s <em> Building of the Year Award</em> and the{" "}
          <em> Oscar Niemeyer Award for Latin American Architecture</em>, both
          for the project New Town hall in Nancagua. In 2016 Ediciones ARQ
          publishes the monograph <em> Beals Lyon Arquitectos: Public Voids</em>
          , featuring a selection of works about public architecture. In 2023 we
          exhibit at the Venice Biennale with the Chilean pavilion
          <em> Moving Ecologies / Ecologías en Movimiento</em>.
        </p>
        <p>
          In addition to our practice, we have taught at Cornell University’s
          College of Architecture Art and Planning, at the IUAV in Venice, Scola
          da Cidade in Sao Paulo, Universidad Católica del Perú, and Universidad
          Católica de Chile, where we currently teach a Master’s Studio at the
          MArq.
        </p>
        <p>
          <strong className="font-semibold font-sans">ALEJANDRO BEALS</strong>{" "}
          In 2001 he receives the title of Architect from PUC (Chile). In 2012
          he got a Master of Philosophy degree (MPhil) at the Royal College of
          Art (RCA), London, under the supervision of professor Nigel Coates.
        </p>
        <p>
          <strong className="font-semibold font-sans">LORETO LYON</strong> She
          gets the title of Architect from PUC (Chile) in 2005. In 2011 she
          receives a Master of Science degree (MSc) in ‘Environmental Design and
          Engineering’ from the Bartlett, University College of London (UCL).
          Director and curator of the XXII Bienal de Arquitectura en Chile,
          <em> Habitats Vulnerables</em> (2023). In 2023 she is designated as
          part of the jury for the Holcim Awards.
        </p>
      </div>
    </>
  );
}
