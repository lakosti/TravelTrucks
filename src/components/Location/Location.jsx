import { useState } from "react";
import { useSelector } from "react-redux";

import icons from "../../assets/img/icons.svg";

import css from "./Location.module.css";

const Location = () => {
  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // індекс обраного міста

  const cities = useSelector((state) => state.trucks.allCities);

  // масив унікальних міст
  const uniqueCities = [...new Set(cities)];

  const handleInputChange = (evt) => {
    evt.preventDefault(); // об'єкт події

    const value = evt.target.value;
    setQuery(value); //те значення шо ми ввели встановлюємо як місто

    //якщо ми щось ввели
    if (value) {
      const suggestions = uniqueCities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(suggestions); // відфільтровані міста в яких співпадають букви що ми ввели
      setActiveIndex(-1); // скидаємо активний індекс при новому вводі
    } else {
      setFilteredCities(uniqueCities); //якщо нічого не ввели показуємо всі міста
    }
  };

  const handleCityClick = (city) => {
    setQuery(city); //встановлюємо значення яке обрало в інтуп
    setFilteredCities([]); //як обрали якесь місто - скидаємо решту міст
  };

  const handleAllCities = () => {
    //якщо нічого не введено -- показуємо всі міста
    if (!query) {
      setFilteredCities(uniqueCities);
    }
  };
  const handleKeyDown = (evt) => {
    if (filteredCities.length > 0) {
      if (evt.key === "ArrowDown") {
        // переміщаємося вниз у списку клавішами
        setActiveIndex((prevIndex) =>
          prevIndex < filteredCities.length - 1 ? prevIndex + 1 : 0
        );
      } else if (evt.key === "ArrowUp") {
        // переміщаємося вгору у списку
        setActiveIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredCities.length - 1
        );
      } else if (evt.key === "Enter") {
        evt.preventDefault(); // вибираємо активне місто при натисканні Enter
        if (activeIndex >= 0) {
          setQuery(filteredCities[activeIndex]);
          setFilteredCities([]);
        }
      }
    }
  };

  return (
    <>
      <form className={css.form}>
        <label className={css.label}>
          <span className={css.location}>Location</span>
          <div className={css.position}>
            <input
              type="text"
              placeholder="Kyiv, Ukraine"
              className={css.input}
              value={query}
              onClick={handleAllCities}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <svg width={20} height={20} className={css.icon}>
              <use href={`${icons}#map`} />
            </svg>
          </div>
          {filteredCities.length > 0 && (
            <ul className={css.suggestions}>
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  className={`${css.suggestionItem} ${
                    activeIndex === index ? css.active : ""
                  }`}
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </label>
      </form>
    </>
  );
};

export default Location;
