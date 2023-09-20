import React, { useState, useEffect } from "react";
import "../style/LaporkanStyle.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const MyLaporkan = () => {
  // State untuk menyimpan lokasi pengguna
  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    // Cek apakah lokasi pengguna sudah ada di localStorage
    const storedLocation = localStorage.getItem("userLocation");
    if (storedLocation) {
      const locationData = JSON.parse(storedLocation);
      setUserLocation(locationData);
    }
    // Tidak perlu lagi meminta izin geolokasi di sini
  }, []);

  const handleLaporkanClick = () => {
    // Lakukan sesuatu saat tombol "LAPORKAN" diklik, misalnya mengirimkan laporan ke server
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
          <div className="card-text"> Laporkan Banjir di Daerahmu!</div>
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
