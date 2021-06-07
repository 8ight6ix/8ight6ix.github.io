export interface RowData {
  id: string;
  type: string;
  title: string;
  date: string;
  creator: string;
  description: string;
  keyword: string[];
  path: string;
  thumbnail: string;
}

class ArtworkData {
  private _id: string;

  private _type: string;

  private _title: string;

  private _date: string;

  private _creator: string;

  private _description: string;

  private _keyword: string[];

  private _path: string;

  private _thumbnail: string;

  constructor(data: RowData) {
    this._id = data.id;
    this._type = data.type;
    this._title = data.title;
    this._date = data.date;
    this._creator = data.creator;
    this._description = data.description;
    this._keyword = Array.isArray(data.keyword) ? [...data.keyword] : [];
    this._path = data.path;
    this._thumbnail = data.thumbnail;
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  get title() {
    return this._title;
  }

  get date() {
    return this._date;
  }

  get creator() {
    return this._creator;
  }

  get description() {
    return this._description;
  }

  get keyword() {
    return [...this._keyword];
  }

  get path() {
    return this._path;
  }

  get thumbnail() {
    return this._thumbnail;
  }
}

export default ArtworkData;
