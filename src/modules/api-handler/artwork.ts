import axios from 'axios';
import { PATH } from 'constant';

export interface ArtworkData {
  name: string;
  creator: string;
  date: string;
  type: string;
  keyword: string[];
  description: string;
  path: string;
}

export const getArtworkList = () =>
  axios(`${PATH.artworks}/index.json`).then((res): ArtworkData[] => res.data);
