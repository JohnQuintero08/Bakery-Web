import React from "react";
import CardItem from "../components/CardItem";
import torta1 from "/torta_8.jpeg";
import miniTwists from "/minitwist_1.jpeg";
import brazoDeReina from "/brazoDeReina_1.jpeg";
import gelatina1 from "/gelatina_1.jpeg";
import gelatina2 from "/gelatina_2.jpeg";

const Menu = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="font-title text-5xl">Menu</h2>
      <span className="border-b-2 w-1/2 my-4"></span>
      <p className="my-4">Prueba todas nuestras diferentes opciones.</p>
      <section className="flex flex-wrap px-8 my-8 gap-4">
        <CardItem
          imagen={torta1}
          alt="torta"
          title="Tortas"
          content="Para toda ocasión: cumpleaños, primeras comuniones, navidad y muchos
            más."
        ></CardItem>
        <CardItem
          classImage={"col-start-2 col-end-3"}
          classText={"col-start-1 col-end-2 row-start-1"}
          imagen={miniTwists}
          alt="Mini Twists"
          title="Mini Twists"
          content="Bizcochos de vainilla rellenos de salsa o crema."
        ></CardItem>
        <CardItem
          imagen={brazoDeReina}
          alt="Brazo de Reina"
          title="Brazo de Reina"
          content="Brazo de Reina clasico relleno de fresas o duraznos"
        ></CardItem>
        <CardItem
          classImage={"col-start-2 col-end-3"}
          classText={"col-start-1 col-end-2 row-start-1"}
          imagen={gelatina1}
          alt="Gelatinas en 3D"
          title="Gelatinas en 3D"
          content="Gelatinas personalizadas con flores comestibles. "
        ></CardItem>
        <CardItem
          imagen={gelatina2}
          alt="Gelatinas en 3D"
          title="Gelatinas en 3D"
          content="Una opción distinta para tus celebraciones."
        ></CardItem>
      </section>
    </div>
  );
};

export default Menu;
