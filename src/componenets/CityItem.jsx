import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
import { Link } from "react-router-dom";


const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position  } = city;
  const { currentCity, deleteCity } = useCities();
  function handleClick(e) {
    e.preventDefault();
    // console.log("test");
    deleteCity(id);
  }
  return (
    <li>
     <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
};
export default CityItem;
