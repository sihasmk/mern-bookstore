export function renderStars(rating) {
  let stars = [];
  let index = 0;
  for (; index < rating; index++) {
    stars.push(1);
  }
  for (; index < 5; index++) {
    stars.push(0);
  }

  return stars;
}
