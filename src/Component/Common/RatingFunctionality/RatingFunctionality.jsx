import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
//   Rating Change
export const renderStars = (product_id, rating, product) => {
  if (product_id == product?.id) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline
            key={i}
            className="text-color-terracotta"
            fontSize={20}
          />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <TiStarHalfOutline
            key={i}
            className="text-color-terracotta"
            fontSize={20}
          />
        );
      } else {
        stars.push(
          <TiStarOutline
            key={i}
            className="text-color-terracotta"
            fontSize={20}
          />
        );
      }
    }
    return stars;
  }
};
