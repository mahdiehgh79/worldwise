import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {(Array.isArray(cities) ? cities : []).map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
export default CityList;
