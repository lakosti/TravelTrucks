import { useParams } from "react-router-dom";
import { getTrackById } from "../../redux/trucks/operations.js";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import icons from "../../assets/img/icons.svg";

import css from "./DetailInfo.module.css";

const DetailInfo = () => {
  const dispatch = useDispatch();

  //!зробити модалку для перегляду картинок
  const { id } = useParams();
  const [truck, setTruck] = useState(null);

  useEffect(() => {
    const fetchTruck = async () => {
      try {
        const { payload } = await dispatch(getTrackById(id));
        setTruck(payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTruck();
  }, [dispatch, id]);

  return (
    <>
      {truck && (
        <div>
          <h2>{truck.name}</h2>
          <div>
            <svg width={24} height={24}>
              <use href={`${icons}#map`} />
            </svg>
            {truck.location}
          </div>
          <p>Price: €{truck.price}.00</p>
          <img
            src={truck.gallery[0].original}
            alt={truck.name}
            width={292}
            height={312}
          />

          <p>{truck.description}</p>
        </div>
      )}
    </>
  );
};

export default DetailInfo;
