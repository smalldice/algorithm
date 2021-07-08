// 如何使用链表来判断一个字符串是否是回文字符串

type N = SingleLinkedNode;

class SingleLinkedNode {
  public value: unknown;
  public next: N;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  private head: N;

  constructor() {
    this.head = null;
  }

  find(value: unknown) {
    let curr = this.head;

    while (curr !== null) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }

    return null;
  }

  insert(node: N, value?: unknown) {
    let curr = this.head;

    if (curr === null) {
      this.head = node;

      return this;
    }

    if (value !== undefined) {
      while (curr.next !== null) {
        if (curr.value == value) {
          node.next = curr.next;
          curr.next = node;
          return this;
        }

        curr = curr.next;
      }

      curr.next = node;

      return this;
    }

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = node;

    return this;
  }

  remove(val) {
    const item = this.find(val);

    if (item === null) return this;

    const previous = this.findPrevious(val);
    previous.next = item.next ? item.next : null;

    return this;
  }

  findPrevious(val) {
    let curr = this.head;

    while (curr.next !== null) {
      if (curr.next.value === val) return curr;
      curr = curr.next;
    }

    return null;
  }

  display() {
    let curr = this.head;

    while (curr !== null) {
      console.log(curr.value);
      curr = curr.next;
    }

    return this;
  }
}

(function () {
  const list = new SingleLinkedList();

  const str = "123456";

  for (let i = 0; i < str.length; i++) {
    list.insert(new SingleLinkedNode(str[i]));
  }

  list.remove("5");
  list.display();
})();
