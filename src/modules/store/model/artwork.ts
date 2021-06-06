import { Record, List } from 'immutable';
import moment from 'moment-timezone';

import { CONFIG } from 'constant';
import { fromArtworkData } from 'modules/util/date';
import { makeRandomStr } from 'modules/util/string';

export interface Artwork {
  id: string;
  type: string;
  title: string;
  date: moment.Moment;
  creator: string;
  description: string;
  keyword: List<string>;
  path: string;
  thumbnail: string;
}

export type ArtworkType = Record<Artwork>;

const ArtworkRecord = Record<Artwork>({
  id: makeRandomStr(12),
  type: CONFIG.artworkDefaultType,
  title: CONFIG.artworkDefaultTitle,
  date: fromArtworkData(CONFIG.artworkDefaultDate),
  creator: CONFIG.artworkDefaultDescription,
  description: CONFIG.artworkDefaultDescription,
  keyword: List(),
  path: CONFIG.artworkDefaultPath,
  thumbnail: '',
});

export default ArtworkRecord;
