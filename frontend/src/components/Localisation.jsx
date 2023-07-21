import React from "react";
import { MapContainer, Marker } from "react-leaflet";

function Localisation() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h2 className="font-amatic mt-36 text-5xl">Rendez-nous visite</h2>
        <p className="font-roboto text-xl px-80 text-center">
          Nous serons ravis de vous recevoir dans notre épicerie dédiée au mode
          de vie zéro déchet{" "}
          <span className="font-bold text-xl">
            du mardi au samedi de 9h à 13h et de 15h à 19h
          </span>
        </p>
      </div>
      <div className="w-1/4">
        <MapContainer
          center={[43.6406728041796, 6.979967542329196]}
          zoom={13}
          scrollWheelZoom
        >
          <Marker position={[43.6406728041796, 6.979967542329196]} />
        </MapContainer>
      </div>
    </>
  );
}

export default Localisation;
