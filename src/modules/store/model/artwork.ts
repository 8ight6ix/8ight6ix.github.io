import { Record, List } from 'immutable';
import moment from 'moment-timezone';

import { CONFIG } from 'constant';
import { fromArtworkData } from 'modules/util/date';
import { makeRandomStr } from 'modules/util/string';

export interface Item {
  id: string;
  name: string;
  creator: string;
  date: moment.Moment;
  type: string;
  keyword: List<string>;
  description: string;
  path: string;
}

export type ArtworkType = Record<Item>;

const Artwork = Record<Item>({
  id: makeRandomStr(12),
  name: CONFIG.artworkDefaultTitle,
  creator: CONFIG.artworkDefaultDescription,
  date: fromArtworkData(CONFIG.artworkDefaultDate),
  type: CONFIG.artworkDefaultType,
  keyword: List(),
  description: CONFIG.artworkDefaultDescription,
  path: CONFIG.artworkDefaultPath,
});

export default Artwork;
