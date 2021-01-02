import {getPerformance} from "./index";

describe('Marketstack mappers', () => {

  const responseExemple = {
    pagination: {
      limit: 100,
      offset: 0,
      count: 22,
      total: 22
    },
    data: [
      {
        date: '2019-02-01T00:00:00+0000',
        symbol: 'AAPL',
        exchange: 'XNAS',
        open: 166.96,
        high: 168.98,
        low: 165.93,
        close: 166.52,
        volume: 32668138,
        adj_open: 164.0861621594,
        adj_high: 166.0713924395,
        adj_low: 163.073891274,
        adj_close: 163.6537357617,
        adj_volume: 32668138
      },
      {
        date: '2019-01-31T00:00:00+0000',
        symbol: 'AAPL',
        exchange: 'XNAS',
        open: 166.11,
        high: 169,
        low: 164.56,
        close: 166.44,
        volume: 40739649,
        adj_open: 163.2507929821,
        adj_high: 166.0910481848,
        adj_low: 161.7274727177,
        adj_close: 163.5751127804,
        adj_volume: 40739649
      }
    ]
  }

  it('should convert historical data to performance', () => {
    const expectedPerformance = {};
    expect(getPerformance(responseExemple)).toEqual(expectedPerformance);
  });
})
