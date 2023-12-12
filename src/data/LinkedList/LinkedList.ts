import LinkedListNode from './LinkedListNode';

export default class LinkedList<TypeValue> {
  private head: LinkedListNode<TypeValue> | null;
  private tail: LinkedListNode<TypeValue> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value: TypeValue) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value: TypeValue) {
    const newNode = new LinkedListNode(value, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

const node = new LinkedList<number>();

node.append(1).append(2).append(3);

console.log(node);

const node1 = new LinkedList<number>();

node1.prepend(777).prepend(666);

console.log(node1);
