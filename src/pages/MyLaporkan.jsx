import React from "react";
import "../style/LaporkanStyle.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
const MyLaporkan = () => {
  return (
    <div className="laporkan-page">
      <section className="background-navbar"></section>
      <section className="background">
        <div className="card">
          <div className="img">
            <BsFillExclamationTriangleFill size={90} />
          </div>
          <div className="card-text"> Laporkan Banjir di Daerahmu!</div>
          <input type="text" placeholder="Pilih daerah!" />
          <button className="button-laporkan">LAPORKAN</button>
        </div>
      </section>
      <section className="extend"></section>
    </div>
  );
};

export default MyLaporkan;
