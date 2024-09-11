import { useSelector } from "react-redux";

const Reviews = () => {
  const current = useSelector((state) => state.trucks.currentTrucks);
  console.log(current);

  return <div>Reviews</div>;
};

export default Reviews;
