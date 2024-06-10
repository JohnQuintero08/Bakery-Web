import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8 p-8">
      <h2 className="font-title text-3xl">Contactanos</h2>
      <p>Nos encuentras en Zipaquirá, Cundinamarca.</p>
      <p>
        Envianos un mensaje al 302 315 0409 y nosotros nos pondremos en contacto
        contigo.
      </p>
      <p>O escribenos directamente por WhatsApp:</p>
      <a
        className="flex items-center justify-center border-4 py-4 w-32 text-lg font-bold"
        href="https://api.whatsapp.com/send?phone=573023150409"
      >
        WhatsApp
      </a>
    </div>
  );
};

export default Contact;
