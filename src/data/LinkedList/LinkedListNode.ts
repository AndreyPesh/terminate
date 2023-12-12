export default class LinkedListNode<TypeValue> {
  value: TypeValue;
  next: LinkedListNode<TypeValue> | null = null;

  constructor(value: TypeValue, next: LinkedListNode<TypeValue> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: (value: TypeValue) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
