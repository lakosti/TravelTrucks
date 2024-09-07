import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { Link } from "react-router-dom";

import { toggleFavouritesList } from "../../redux/trucks/slice.js";

import icons from "../../assets/img/icons.svg";
import css from "./Item.module.css";

const Item = (data) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.trucks.favourites);
  const isFavourite = favourites.some((item) => item.id === data.id);

  const {
    gallery,
    name,
    location,
    price,
    rating,
    reviews,
    description,
    id,
    TV,
    AC,
    bathroom,
    kitchen,
    radio,
    refrigerator,
    microwave,
    water,
    gas,
  } = data;

  const handleFavouriteClick = () => {
    dispatch(toggleFavouritesList(data));
  };
  // ! отпимізувати СВГ
  //! пофіксити закінчення опису ...
  return (
    <li className={css.wrap}>
      <div className={css.item}>
        <img
          src={gallery[0].thumb}
          className={css.img}
          alt="Example truck"
          width={292}
          height={320}
        />
      </div>
      <div className={css.wrapper}>
        <div className={css.nameContainer}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.innerPrice}>
            <p className={css.price}>€{price}.00</p>
            <button className={css.favouriteBtn} onClick={handleFavouriteClick}>
              <svg
                width={24}
                height={24}
                className={isFavourite ? css.active : ""}
              >
                <use href={`${icons}#favourites`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.innerReviews}>
          <div className={css.reviews}>
            <svg className={css.reviewsSvg} width={24} height={24}>
              <use href={`${icons}#star`} />
            </svg>
            <p className={css.rating}>
              {rating}({reviews.length}) Reviews
            </p>
          </div>
          <div className={css.innerLocation}>
            <svg className={css.locationSvg} width={24} height={24}>
              <use href={`${icons}#map`} />
            </svg>
            {location}
          </div>
        </div>
        <p className={css.desc}>{description.slice(0, 64) + "..."}</p>
        <div className={css.filterList}>
          <div className={css.filterItem}>
            <svg className={css.filterSvg} width={20} height={20}>
              <use href={`${icons}#automatic`} />
            </svg>
            <p className={css.filterName}>Automatic</p>
          </div>
          <div className={css.filterItem}>
            <svg className={css.filterSvg} width={20} height={20}>
              <use href={`${icons}#fuel`} />
            </svg>
            <p className={css.filterName}>Petrol</p>
          </div>
          {AC && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#ac`} />
              </svg>
              <p className={css.filterName}>AC</p>
            </div>
          )}
          {kitchen && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#kitchen`} />
              </svg>
              <p className={css.filterName}>Kitchen</p>
            </div>
          )}
          {radio && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#radio`} />
              </svg>
              <p className={css.filterName}>Radio</p>
            </div>
          )}
          {TV && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#tv`} />
              </svg>
              <p className={css.filterName}>TV</p>
            </div>
          )}
          {water && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#water`} />
              </svg>
              <p className={css.filterName}>Water</p>
            </div>
          )}
          {gas && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#gas`} />
              </svg>
              <p className={css.filterName}>Gas</p>
            </div>
          )}
          {microwave && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#microwave`} />
              </svg>
              <p className={css.filterName}>Microwave</p>
            </div>
          )}
          {refrigerator && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#refrigerator`} />
              </svg>
              <p className={css.filterName}>Refrigerator</p>
            </div>
          )}
          {bathroom && (
            <div className={css.filterItem}>
              <svg className={css.filterSvg} width={20} height={20}>
                <use href={`${icons}#bathroom`} />
              </svg>
              <p className={css.filterName}>Bathroom</p>
            </div>
          )}
        </div>
        <Link to={`/campers/${id}`}>
          <button className={css.showMore}>Show more</button>
        </Link>
      </div>
    </li>
  );
};

export default Item;

// "items": [
//   {
//     "id": "1",
//     "name": "Road Bear C 23-25",
//     "price": 10000,
//     "rating": 4.5,
//     "location": "Ukraine, Kyiv",
//     "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//     "form": "alcove",
//     "length": "7.3m",
//     "width": "2.65m",
//     "height": "3.65m",
//     "tank": "208l",
//     "consumption": "30l/100km",
//     "transmission": "automatic",
//     "engine": "diesel",
//     "AC": true,
//     "bathroom": true,
//     "kitchen": false,
//     "TV": true,
//     "radio": true,
//     "refrigerator": false,
//     "microwave": true,
//     "gas": false,
//     "water": true,
//     "gallery": [
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
//     "reviews": [
//       {
//         "reviewer_name": "Alice",
//         "reviewer_rating": 5,
//         "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//       },
//       {
//         "reviewer_name": "Bob",
//         "reviewer_rating": 4,
//         "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//       }
//     ]
//   },
