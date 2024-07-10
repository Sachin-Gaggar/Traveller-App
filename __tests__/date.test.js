import {calculateTodaysProgress, getDateInNumFormat} from '../src/util/date';
import {Days} from '../src/types/itenaryForm';

describe('getDateInNumFormat', () => {
  it("should return yesterday's date in number format", () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    expect(getDateInNumFormat(Days.yesterday)).toBeCloseTo(
      yesterday.getTime(),
      2,
    );
  });

  it("should return tomorrow's date in number format", () => {
    const dateInNumber = getDateInNumFormat(Days.tomorrow);
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() + 1);
    expect(dateInNumber).toBe(expectedDate.getTime());
  });

  it("should return today's date in number format", () => {
    const dateInNumber = getDateInNumFormat(Days.today);
    const expectedDate = new Date();
    expect(dateInNumber).toBe(expectedDate.getTime());
  });
});
