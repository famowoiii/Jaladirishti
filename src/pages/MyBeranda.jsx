import React from "react";
import "../style/BerandaStyle.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { BeritaSlider } from "../components/BeritaSlider";
import MapPotensi from "../function/MapPotensi";

import { data } from "../Data/DataBerita.json";
const MyBeranda = () => {
  return (
    <div>
      {/* Section-1 Start */}
      <section className="section-1">
        <div className="section-1-text">
          <h3>Jaladirishti</h3>
          <p>
            Layanan Sistem Informasi Banjir dan Pelaporan Banjir di Kota
            Surabaya
          </p>
          <button id="btn-laporkan-banjir">
            <Link to="/laporkan">Laporkan Banjir!</Link>
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg-1"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Section-2 Start */}
      <section className="section-2">
        <div className="section-2-wrapper">
          <div className="section-2-text">
            <h2>Tentang</h2>
            <h2>Banjir di Surabaya</h2>
            <p>
              kota Surabaya dengan luas daerah daratan sebesar 33.048 Hektar
              menjadikannya salah satu kota besar di Pulau Jawa. Secara
              topografi subaya memiliki ketinggian 3-6 meter di atas permukaan
              air laut. Secara geografis, Kota Surabaya terletak di hilir daerah
              aliran sungai (DAS) Brantas yang bermuara di selat Madura.
              Terdapat beberapa sungai yang mengaliran air banjir dari hulu
              melewati Kota Surabaya sehingga Kota Surabaya memiliki
              potensi bencana banjir.
            </p>
          </div>
          <div>
            <img
              src="src\assets\Aset - Tentang Surabaya.png"
              alt=""
              className="img-tentang-surabaya"
            />
          </div>
        </div>
      </section>
      {/* Section-3 Start*/}
      <section className="section-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,165.3C640,160,800,96,960,69.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="section-3-wrapper">
          <div className="kiri">
            <div className="search-bar">
              <input
                type="text"
                name=""
                id="cari-daerahmu"
                placeholder="Cari Daerahmu!"
              />
              <button>Cari</button>
            </div>

            <div className="riwayat-laporan">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              voluptatum maiores officia libero doloremque molestiae reiciendis
              at, beatae numquam accusamus.
            </div>
          </div>
          <div className="kanan">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi quis reprehenderit repudiandae ullam vero exercitationem
            sit eveniet voluptas repellendus!
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg-1"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* section-4*/}
      <section className="section-4">
        <div className="section-4-wrapper">
          <div className="section-4-text">
            <h2>Peta Potensi Banjir di Surabaya</h2>
            <p>Data real-time dari Open Layer</p>
          </div>
          <div>
            <div className="map-potensi">
              <MapPotensi />
            </div>
            <div className="map-text">
              silahkan pilih daerah di area Peta Kota Surabaya untuk melihat
              tingkat resiko banjir
            </div>
          </div>
        </div>
      </section>
      <section className="section-5"></section>
      <section className="section-6">
        <BeritaSlider props={data} />
      </section>
    </div>
  );
};

export default MyBeranda;
