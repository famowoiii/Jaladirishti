import React, { useState, useEffect } from "react";
import "../style/LaporkanStyle.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const MyLaporkan = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Gagal mendapatkan lokasi geolokasi:", error);
        }
      );
    } else {
      console.error("Geolokasi tidak didukung oleh browser Anda.");
    }
  }, []);

  const handleLaporkanClick = () => {
    alert(
      `Laporan banjir di ${userLocation.latitude}, ${userLocation.longitude} telah dikirim!`
    );
  };

  return (
    <div className="laporkan-page">
      <section className="background-navbar"></section>
      <section className="background">
        <div className="card">
          <div className="img">
            <BsFillExclamationTriangleFill size={90} />
          </div>
          <div className="card-text">Laporkan Banjir di Daerahmu!</div>
          <input
            type="text"
            placeholder="Pilih daerah!"
            value={`${userLocation.latitude}, ${userLocation.longitude}`}
            readOnly
          />
          <button className="button-laporkan" onClick={handleLaporkanClick}>
            LAPORKAN
          </button>
        </div>
      </section>
      <section className="extend"></section>
    </div>
  );
};

export default MyLaporkan;
