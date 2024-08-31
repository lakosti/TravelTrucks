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
              <use href={`${icons}#star`} />
            </svg>
            <p>
              {truck.rating}({truck.reviews.length}) Reviews
            </p>
          </div>
          <div>
            <svg width={24} height={24}>
              <use href={`${icons}#map`} />
            </svg>
            {truck.location}
          </div>
          <p>Price: €{truck.price}.00</p>
          {truck.gallery.map(({ original }, i) => (
            <img key={i} src={original} width={292} height={312} />
          ))}

          <p>{truck.description}</p>
        </div>
      )}
    </>
  );
};

export default DetailInfo;

//    "gallery": [
//       {
//         "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//         "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//       },
//       {
//         "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//         "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//       },
//       {
//         "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//         "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//       }
//     ],
