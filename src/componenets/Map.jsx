import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
const Map = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      mappp
      <h2>
        position : {lat} {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 23, lng: 55 })}>
        change here
      </button>
    </div>
  );
};
export default Map;
