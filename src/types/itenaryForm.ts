export enum Days {
  yesterday,
  today,
  tomorrow,
}
export type Routes = {
  key: Days;
  title: string;
  date: number;
};
export type TravelPlanType = {
  startTime: string;
  endTime: string;
  place: string;
  description: string;
  image: string;
};
