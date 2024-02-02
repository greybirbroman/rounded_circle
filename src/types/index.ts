export interface IEventList {
  year: number;
  title: string;
}

export interface IEvent {
  id: number;
  category: string;
  year_from: number | string;
  year_to: number | string;
  list: IEventList[];
}

export type AnimatedCircleProps = {
  numberOfDots: number;
  circleRadius: number;
}
