import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTracks, getTrucksMore } from "../../redux/trucks/operations.js";

import Item from "../Item/Item.jsx";

const Items = () => {
  const filters = useSelector((state) => state.trucks.filtres);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  // const [loadingMore, setLoadingMore] = useState(false); //loader from more btn
  const [trucks, setTrucks] = useState(null);
  //! ПЕРЕВІРКА НА КІНЕЦЬ
  //totalpage / items on page (12 / 4)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { payload } = await dispatch(
          getTracks({ page: 1, limit: 4, filters })
        );
        setTrucks(payload.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, filters]);
  console.log(trucks);

  useEffect(() => {
    if (page > 1) {
      const fetchMoreData = async () => {
        try {
          const { payload } = await dispatch(
            getTrucksMore({ page, limit: 4, filters })
          );
          setTrucks((prevTrucks) => [...prevTrucks, ...payload.items]);
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
  console.log(page);
  return (
    <div>
      {trucks && (
        <div>
          {trucks.map((data) => (
            <Item key={data.id} {...data} />
          ))}
        </div>
      )}
      {/* //! ПОМІНЯТИ ПЕРЕВІРКУ НА КІНЕЦЬ */}
      <button onClick={handleShowNextTruck} disabled={page === 3}>
        Load more
      </button>
    </div>
  );
};

export default Items;
