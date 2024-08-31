import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { toggleFavouritesList } from "../../redux/trucks/slice.js";

import icons from "../../assets/img/icons.svg";
import css from "./Item.module.css";

const Item = (data) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.trucks.favourites);
  const isFavourite = favourites.some((item) => item.id === data.id);

  const { gallery, name, location, price, rating, reviews, description, id } =
    data;

  const handleFavouriteClick = () => {
    dispatch(toggleFavouritesList(data));
  };

  return (
    <div>
      <div>
        <img
          src={gallery[0].thumb}
          alt="Example truck"
          width={292}
          height={320}
        />
      </div>
      <h2>{name}</h2>
      <div>
        <p>€{price}.00</p>
        <button onClick={handleFavouriteClick}>
          <svg width={24} height={24} className={isFavourite ? css.active : ""}>
            <use href={`${icons}#favourites`} />
          </svg>
        </button>
      </div>
      <div>
        <svg width={24} height={24}>
          <use href={`${icons}#star`} />
        </svg>
        <p>
          {rating}({reviews.length}) Reviews
        </p>
      </div>
      <div>
        <svg width={24} height={24}>
          <use href={`${icons}#map`} />
        </svg>
        {location}
      </div>
      <p>{description}</p>
      <div>
        <div>
          <svg width={20} height={20}>
            <use href={`${icons}#automatic`} />
          </svg>
        </div>
        <div>
          <svg width={20} height={20}>
            <use href={`${icons}#fuel`} />
          </svg>
        </div>
        <div>
          <svg width={20} height={20}>
            <use href={`${icons}#kitchen`} />
          </svg>
        </div>
        <div>
          <svg width={20} height={20}>
            <use href={`${icons}#ac`} />
          </svg>
        </div>
      </div>
      <Link to={`/campers/${id}`}>
        <button>Show more</button>
      </Link>
    </div>
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
