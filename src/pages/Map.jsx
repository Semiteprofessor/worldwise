import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contextApi/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import useUrlPosition from "../hooks/useUrlPosition";

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getLocation,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  const handleMapDragEnd = (e) => {
    const { lat, lng } = e.target.getCenter();
    navigate(`/map?lat=${lat}&lng=${lng}`);
  };

  const handleMapZoom = (e) => {
    const { zoom } = e.target;
    navigate(`/map?lat=${mapPosition[0]}&lng=${mapPosition[1]}&zoom=${zoom}`);
  };

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <button className={styles.position} onClick={getLocation}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
        onDragend={handleMapDragEnd}
        onZoom={handleMapZoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[
              Number(city.coordinates.lat),
              Number(city.coordinates.lng),
            ]}
            key={city.id}
          >
            <Popup>
              <span>{city.flag}</span> <span>{city.city}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

const ChangeCenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    navigate(`form?lat=${lat}&lng=${lng}`);
  });
};

export default Map;
