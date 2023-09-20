import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import { Feature } from "ol";
import { Style, Circle, Fill, Stroke } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import GeoJSON from "ol/format/GeoJSON"; // Impor GeoJSON

import "./MapPreview2Style.css";

const MapPreview = () => {
  useEffect(() => {
    const redCircleStyle = new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({ color: "red" }),
        stroke: new Stroke({ color: "black", width: 0.5 }),
      }),
    });

    const redCircleSource = new VectorSource();
    const redCircleLayer = new VectorLayer({
      source: redCircleSource,
      style: redCircleStyle,
    });

    const map = new Map({
      target: "map1",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        redCircleLayer,
      ],
      view: new View({
        center: fromLonLat([112.745596, -7.263907]),
        zoom: 11.4,
      }),
    });

    const storedLocation = localStorage.getItem("userLocation");
    if (storedLocation) {
      const locationData = JSON.parse(storedLocation);
      const latitude = parseFloat(locationData.latitude);
      const longitude = parseFloat(locationData.longitude);

      const redCircleFeature = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude])),
      });
      redCircleSource.addFeature(redCircleFeature);

      map.getView().setCenter(fromLonLat([longitude, latitude]));
    }

    // Buat sumber data dari file JSON yang ada di folder public
    const geojsonSource = new VectorSource({
      url: "./ADMINISTRASIDESA_AR_25K_Feat.json",
      format: new GeoJSON(),
    });

    // Buat lapisan untuk data GeoJSON
    const geojsonLayer = new VectorLayer({
      source: geojsonSource,
      // Anda dapat menyesuaikan gaya dan sifat lainnya sesuai kebutuhan Anda
    });

    // Tambahkan lapisan GeoJSON ke dalam peta
    map.addLayer(geojsonLayer);

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div className="map-preview">
      <div id="map1" className="map-container"></div>
    </div>
  );
};

export default MapPreview;
