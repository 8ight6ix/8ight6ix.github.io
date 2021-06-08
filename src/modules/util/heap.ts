class Heap<Type> {
  private _items: Type[] = [];

  private _comp: (a: Type, b: Type) => boolean;

  constructor(comp: (a: Type, b: Type) => boolean) {
    this._comp = comp;
  }

  get size() {
    return this._items.length;
  }

  static getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  static getLeftChildIndex(index: number) {
    return index * 2 + 1;
  }

  static getRightChildIndex(index: number) {
    return index * 2 + 2;
  }

  claer() {
    this._items = [];
  }

  swap(a: number, b: number) {
    const temp = this._items[a];
    this._items[a] = this._items[b];
    this._items[b] = temp;
  }

  peak() {
    return this._items[0];
  }

  add(item: Type) {
    let index = this._items.push(item) - 1;
    let parentIndex = Heap.getParentIndex(index);

    while (
      parentIndex >= 0 &&
      this._comp(this._items[index], this._items[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Heap.getParentIndex(index);
    }
  }

  poll() {
    if (this.size < 2) return this._items.pop();

    const item = this.peak();
    this._items[0] = this._items.pop() as Type;

    let index = 0;
    let leftIndex = Heap.getLeftChildIndex(index);
    let rightIndex = Heap.getRightChildIndex(index);

    while (leftIndex < this.size) {
      const target =
        rightIndex < this.size &&
        this._comp(this._items[rightIndex], this._items[leftIndex])
          ? rightIndex
          : leftIndex;

      if (this._comp(this._items[index], this._items[target])) break;
      this.swap(index, target);

      index = target;
      leftIndex = Heap.getLeftChildIndex(index);
      rightIndex = Heap.getRightChildIndex(index);
    }

    return item;
  }
}

export default Heap;
