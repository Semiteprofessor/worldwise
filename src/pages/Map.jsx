import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contextApi/CitiesContext";

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams)
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  console.log(mapLat, mapLng);
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        // center={[mapLat, mapLng]}
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.coordinates.lat, city.coordinates.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.flag}</span> <span>{city.city}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={[mapLat || 40, mapLng || 0]} />
      </MapContainer>
    </div>
  );
};

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

export default Map;
