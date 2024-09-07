import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTracks, getTrucksMore } from "../../redux/trucks/operations.js";

import Item from "../Item/Item.jsx";

import css from "./Items.module.css";

const Items = () => {
  const filters = useSelector((state) => state.trucks.filtres);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [trucks, setTrucks] = useState([]);
  const [totalTrucks, setTotalTrucks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { payload } = await dispatch(
          getTracks({ page: 1, limit: 4, filters })
        );
        setTrucks(payload.items);
        setTotalTrucks(payload.total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, filters]);

  useEffect(() => {
    if (page > 1) {
      const fetchMoreData = async () => {
        try {
          const { payload } = await dispatch(
            getTrucksMore({ page, limit: 4, filters })
          );
          setTrucks((prevTrucks) => [...prevTrucks, ...payload.items]);
          setTotalTrucks(payload.total);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMoreData();
    }
  }, [dispatch, page, filters]);

  const handleShowNextTruck = () => {
    setPage(page + 1);
  };
  return (
    <div className={css.wrapper}>
      {trucks && (
        <ul className={css.list}>
          {trucks.map((data) => (
            <Item key={data.id} {...data} />
          ))}
        </ul>
      )}

      {totalTrucks !== trucks.length && trucks.length ? (
        <button className={css.btn} onClick={handleShowNextTruck}>
          Load more
        </button>
      ) : (
        ""
      )}
      {/* <button onClick={handleShowNextTruck}>Load more</button> */}
    </div>
  );
};

export default Items;
