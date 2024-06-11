import { formatDate, timeAgo } from '../date-utils';

describe('Date Utils', () => {
  it('should format date correctly', () => {
    const date = new Date('2022-01-01T00:00:00');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('1 January 2022');
  });

  it('should return time ago', () => {
    const dateString = '01/01/2022';
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('2 years ago');
  });
});
