import {getDateWithMonthAgo} from "./index";

describe('Utils functions', () => {
  it('should return 2 dec 2021', () => {
    const twoJanuary2021 = new Date(2021, 1, 2);
    const expectedValue = new Date(2020, 12, 2);
    expect(getDateWithMonthAgo(twoJanuary2021, 1)).toEqual(expectedValue);
  });

  it('should return 2 oct 2020', () => {
    const twoJanuary2021 = new Date(2021, 1, 2);
    const expectedValue = new Date(2020, 10, 2);
    expect(getDateWithMonthAgo(twoJanuary2021, 3)).toEqual(expectedValue);
  });

  it('should return 2 july 2020', () => {
    const twoJanuary2021 = new Date(2021, 1, 2);
    const expectedValue = new Date(2020, 7, 2);
    expect(getDateWithMonthAgo(twoJanuary2021, 6)).toEqual(expectedValue);
  });
})
