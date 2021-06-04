import moment from 'moment-timezone';
import { CONFIG } from 'constant';

export const fromArtworkData = (str: string) => {
  return moment.tz(
    str,
    CONFIG.artworkImportDateFromat,
    CONFIG.artworkImprotDateTimezone,
  );
};

export const getLocaleTimeStr = (date: moment.Moment) => {
  return date.local().format(CONFIG.artworkViewDateFormat);
};
