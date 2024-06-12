import { vi } from 'vitest';
import { convertTimeInHoursAndMinutes, formatDate, timeAgo } from '../date-utils';

describe('Date Utils', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should format date correctly', () => {
    const systemDate = new Date(2024, 1, 1, 13);
    vi.setSystemTime(systemDate);
    const date = new Date('2022-01-01T00:00:00');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('1 January 2022');
  });

  it('should return time ago', () => {
    const systemDate = new Date(2024, 1, 1, 13);
    vi.setSystemTime(systemDate);
    const dateString = '01/01/2022';
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('2 years ago');
  });

  it('should return time ago - hours', () => {
    const systemDate = new Date(2022, 1, 1, 13);
    vi.setSystemTime(systemDate);
    const dateString = new Date(2022, 1, 1, 1);
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('12 hours ago');
  });

  it('should return time ago - day', () => {
    const systemDate = new Date(2022, 1, 2, 13);
    vi.setSystemTime(systemDate);
    const dateString = new Date(2022, 1, 1, 1);
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('1 day ago');
  });

  it('should return time ago - weeks', () => {
    const systemDate = new Date(2022, 2, 2, 13);
    vi.setSystemTime(systemDate);
    const dateString = new Date(2022, 1, 1, 1);
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('4 weeks ago');
  });

  it('should return time ago - minutes', () => {
    const systemDate = new Date(2022, 1, 1, 1);
    systemDate.setMinutes(2);
    vi.setSystemTime(systemDate);
    const dateString = new Date(2022, 1, 1, 1);
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('2 minutes ago');
  });

  it('should return time ago - minutes', () => {
    const systemDate = new Date(2022, 1, 1, 1);
    vi.setSystemTime(systemDate);
    const dateString = new Date(2022, 1, 1, 1);
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('just now');
  });

  it('should return time ago for date', () => {
    const systemDate = new Date(2024, 1, 1, 13);
    vi.setSystemTime(systemDate);
    const dateString = new Date('01/01/2022');
    const parsedDate = timeAgo(dateString);
    expect(parsedDate).toEqual('2 years ago');
  });

  it('should return time in min and hours', () => {
    const dateString = '01/01/2022';
    const parsedDate = convertTimeInHoursAndMinutes(115);
    expect(parsedDate).toEqual('1h 55m');
  });
});
