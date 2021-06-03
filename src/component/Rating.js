import { FaStar } from "react-icons/fa";
export default function Rating({ rating }) {
  let totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="star" key={i}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="star-o" key={i}>
          <FaStar />
        </li>
      );
    }
  }
  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
}
