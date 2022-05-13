import { Rating, SumRating } from '../../../shared/core';
import type { ISumRatingItem } from '../../../shared/core';

describe('Rating', () => {
  let rating: Rating;
  let currentRating: ISumRatingItem[];

  beforeAll(() => {
    rating = new Rating();
    currentRating = new SumRating([4, 5]).classificationRating;
  });
  it('should return an average of evaluations in float number format', () => {
    const result = rating.calculate(currentRating);
    const expect_result = 4.6;
    expect(result).toEqual(expect_result);
  });
});
