/* Format Date */

import { FilterType, MembersRow } from '../api/Members/types';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const month = MONTHS[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return `${month} ${day}, ${year} - ${time}`;
};

/*  Ends */

/* Creating date from Date and Time String*/

export const createDate = (date: string, time: string): Date => {
  const [year, month, day] = date.split('-').map((item) => Number(item));
  const [hour, minute] = time.split(':').map((item) => Number(item));

  return new Date(year, month - 1, day, hour, minute);
};

/*  Ends */

/** Time and Date Validation */

export const validateDate = (dateString: string): boolean => {
  const parts = dateString.split('-').filter((part) => !!part);
  if (parts.length !== 3) return false;

  const [year, month, day] = parts.map((part) => Number(part));

  if (isNaN(year) || year < 1970 || year > 2100) return false;
  if (isNaN(month) || month < 1 || month > 12) return false;
  if (isNaN(day) || day < 1 || day > 31) return false;

  return true;
};

export const validateTime = (timeString: string): boolean => {
  const parts = timeString.split(':');
  if (parts.length !== 2) return false;

  const [hour, minute] = parts.map((part) => Number(part));

  if (isNaN(hour) || hour < 0 || hour > 23) return false;
  if (isNaN(minute) || minute < 0 || minute > 59) return false;

  return true;
};

/*  Ends */

/* Filter Members By Category  */

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
const dateDiffInDays = (a: Date, b: Date) => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
};

export const filterMembersByCategory = (
  members: MembersRow[],
  category: FilterType
): MembersRow[] => {
  if (category === 'all') return members;

  const currentDate = new Date();

  return members.filter((member) => {
    const meetingDate = new Date(member.date);
    const differenceDays = dateDiffInDays(currentDate, meetingDate);
    return differenceDays <= 14 && member;
  });
};

export const filterMembersByName = (
  members: MembersRow[],
  query: string
): MembersRow[] => {
  const queryCast = query.toLowerCase().trim();
  if (queryCast.trim() === '') return members;

  return members.filter((member) => {
    return member.name.toLowerCase().includes(queryCast);
  });
};
