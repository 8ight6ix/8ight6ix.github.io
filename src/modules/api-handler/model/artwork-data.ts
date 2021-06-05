export interface RowData {
  id: string;
  name: string;
  creator: string;
  date: string;
  type: string;
  keyword: string[];
  description: string;
  path: string;
}

class ArtworkData {
  private _id: string;

  private _name: string;

  private _creator: string;

  private _date: string;

  private _type: string;

  private _keyword: string[];

  private _description: string;

  private _path: string;

  constructor(data: RowData) {
    this._id = data.id;
    this._name = data.name;
    this._creator = data.creator;
    this._date = data.date;
    this._type = data.type;
    this._keyword = [...data.keyword];
    this._description = data.description;
    this._path = data.path;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get creator() {
    return this._creator;
  }

  get date() {
    return this._date;
  }

  get type() {
    return this._type;
  }

  get keyword() {
    return [...this._keyword];
  }

  get description() {
    return this._description;
  }

  get path() {
    return this._path;
  }
}

export default ArtworkData;
