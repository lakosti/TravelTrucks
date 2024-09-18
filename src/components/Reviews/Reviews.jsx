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
        <ul className={css.list}>
          {current.reviews.map((review, i) => (
            <li className={css.item} key={i}>
              <div className={css.inner}>
                <span className={css.letter}>{review.reviewer_name[0]}</span>
                <div>
                  <p className={css.name}>{review.reviewer_name}</p>
                  <p className={css.rating}>
                    {renderRating(review.reviewer_rating)}
                  </p>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
