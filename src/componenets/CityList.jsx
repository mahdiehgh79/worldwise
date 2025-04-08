import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
const CityList = ({ isLoading, cities }) => {
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
