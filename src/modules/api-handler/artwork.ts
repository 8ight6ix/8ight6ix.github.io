import axios from 'axios';

import { PATH } from 'constant';
import ArtworkData, { RowData } from 'modules/api-handler/model/artwork-data';

export const getDataList = () =>
  axios
    .get<RowData[]>(`${PATH.artworks}/index.json`)
    .then((res) => res.data.map((row) => new ArtworkData(row)));
