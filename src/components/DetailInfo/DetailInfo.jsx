import { useParams } from "react-router-dom";
import { getTrackById } from "../../redux/trucks/operations.js";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import icons from "../../assets/img/icons.svg";

import css from "./DetailInfo.module.css";
// //!зробити модалку для перегляду картинок

const DetailInfo = () => {
  const dispatch = useDispatch();
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
        <div className={css.infoWrap}>
          <h2 className={css.title}>{truck.name}</h2>

          <div className={css.inner}>
            <div className={css.ratingWrap}>
              <svg className={css.ratingIcon} width={16} height={16}>
                <use href={`${icons}#star`} />
              </svg>
              <p className={css.ratingText}>
                {truck.rating}({truck.reviews.length}) Reviews
              </p>
            </div>
            <div className={css.locationWrap}>
              <svg width={16} className={css.locationIcon} height={16}>
                <use href={`${icons}#map`} />
              </svg>
              <p className={css.locationText}> {truck.location}</p>
            </div>
          </div>

          <p className={css.price}> €{truck.price}.00</p>

          <div className={css.gallery}>
            {truck.gallery.map(({ original }, i) => (
              <img
                className={css.img}
                key={i}
                src={original}
                width={292}
                height={312}
              />
            ))}
          </div>

          <p className={css.desc}>{truck.description}</p>
        </div>
      )}
    </>
  );
};

export default DetailInfo;
