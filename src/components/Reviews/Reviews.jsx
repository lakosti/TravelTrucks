import { useSelector } from "react-redux";

import icons from "../../assets/img/icons.svg";
import css from "./Reviews.module.css";

const TOTAL_STARTS = 5;

const Reviews = () => {
  const current = useSelector((state) => state.trucks.currentTrucks);

  const renderRating = (rating) => {
    return Array.from({ length: TOTAL_STARTS }, (_, i) => (
      <svg
        key={i}
        className={i < rating ? css.starYellow : css.starGrey}
        width={16}
        height={16}
      >
        <use href={`${icons}#star`} />
      </svg>
    ));
  };

  //*другий варіант
  // const renderRating = (filled) => {
  //   let result = [];

  //   for (let i = 0; i < 5; i++) {
  //     result.push(
  //       <svg
  //         key={i}
  //         className={i < filled ? css.starYellow : css.starGrey}
  //         width={16}
  //         height={16}
  //       >
  //         <use href={`${icons}#star`} />
  //       </svg>
  //     );
  //   }
  //   return result;
  // };

  return (
    <>
      {current && (
        <ul>
          {current.reviews.map((review, i) => (
            <li key={i}>
              <span>{review.reviewer_name[0]}</span>
              <p>{review.reviewer_name}</p>
              <div>{renderRating(review.reviewer_rating)}</div>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
