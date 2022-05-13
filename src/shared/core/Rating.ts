import { Sum } from 'nest-shared';

export interface ISumRating {
  one_stars: number[];
  two_stars: number[];
  three_stars: number[];
  four_stars: number[];
  five_stars: number[];
  total_stars: number[];
}
export interface ISumRatingItem {
  classification: number;
}
export class SumRating {
  public classification: ISumRatingItem[];
  constructor(args: number[]) {
    this.classification = args.map((item) => {
      return {
        classification: item,
      };
    });
  }
  get classificationRating(): ISumRatingItem[] {
    return this.classification;
  }
}

export class Rating {
  constructor() {
    if (!(this instanceof Rating)) return new Rating();
  }
  public sumStars(item: ISumRatingItem[]): ISumRating {
    const one_stars = item.filter((entity) => entity.classification === 1);
    const two_stars = item.filter((entity) => entity.classification === 2);
    const three_stars = item.filter((entity) => entity.classification === 3);
    const four_stars = item.filter((entity) => entity.classification === 4);
    const five_stars = item.filter((entity) => entity.classification === 5);
    const total_stars = item.map((entity) => entity.classification);
    return {
      one_stars: one_stars.map((entity) => (entity.classification ? Number(entity.classification) : 0)),
      two_stars: two_stars.map((entity) => (entity.classification ? Number(entity.classification) : 0)),
      three_stars: three_stars.map((entity) => (entity.classification ? Number(entity.classification) : 0)),
      four_stars: four_stars.map((entity) => (entity.classification ? Number(entity.classification) : 0)),
      five_stars: five_stars.map((entity) => (entity.classification ? Number(entity.classification) : 0)),
      total_stars: total_stars,
    };
  }
  public calculate(item: ISumRatingItem[]): number {
    const rating = this.sumStars(item);
    const total_stars = Sum(rating.total_stars);
    const one_stars = Sum(rating.one_stars);
    const two_stars = Sum(rating.two_stars);
    const three_stars = Sum(rating.three_stars);
    const four_stars = Sum(rating.four_stars);
    const five_stars = Sum(rating.five_stars);

    const result =
      (5 * five_stars + 4 * four_stars + 3 * three_stars + 2 * two_stars + one_stars) / Number(total_stars);
    const fixed = result > 5 ? 5 : result;
    return Number(fixed.toFixed(1));
  }
}
export type RatingType = typeof Rating;
export default Rating;
