import React from "react";
import SectionTextHome from "../components/SectionTextHome";
import ImgMainHome from "../components/ImgMainHome";
import ButtonGen from "../components/ButtonGen";
import torta1 from "/torta_1.jpeg";
import torta2 from "/torta_2.jpeg";
import torta3 from "/torta_3.jpeg";
import torta9 from "/torta_9.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <main className=" relative mt-4 w-full h-96 before:w-11/12 before:h-almostFull before:border-4 before:absolute before:content-[''] before:top-4 before:left-6 ">
        <div className=" absolute bg-customWhite bg-opacity-60 top-1/2 left-1/2 -translate-x-32 -translate-y-16 p-7">
          <h1 className=" font-title text-2xl text-center">
            Pastelería y <br /> Repostería Artesanal
          </h1>
        </div>
        <img
          className="object-cover w-full h-full"
          src={torta1}
          alt="torta decorada"
        />
      </main>

      <SectionTextHome title={"Bienvenidos a De Ututuy"}>
        Nuestro amor por la repostería se evidencia en cada pieza, desde lo más
        tradicional hasta lo más innovador. Seleccionamos cuidadosamente los
        ingredientes para garantizar que cada prodcuto no solo resulte exquisito
        al paladar, sino también deslumbrante a la vista.
      </SectionTextHome>

      <ButtonGen className={"mb-12"} to={"menu"}>
        Menu
      </ButtonGen>

      <section className="flex flex-wrap sm:w-3/4 sm:grid sm:grid-cols-4 sm:grid-rows-3 sm:gap-2">
        <ImgMainHome
          image={torta2}
          alt={"torta decorada"}
          className={"sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2"}
        ></ImgMainHome>
        <ImgMainHome
          image={torta9}
          alt={"torta decorada"}
          className={"sm:col-start-2 sm:col-end-5 sm:row-start-2 sm:row-end-3"}
        ></ImgMainHome>
        <ImgMainHome
          image={torta3}
          alt={"torta decorada"}
          className={"sm:col-start-1 sm:col-end-4 sm:row-start-3 sm:row-end-4"}
        ></ImgMainHome>
      </section>

      <SectionTextHome title={"Eventos especiales"}>
        Convertimos tus eventos en algo verdaderamente especial. Estamos
        disponibles para asistirte en la construcción de memorias dulces que
        perduren para siempre.
      </SectionTextHome>

      <ButtonGen className={"mb-12"} to={"contact"}>
        Contacto
      </ButtonGen>
    </div>
  );
};
export default Home;
