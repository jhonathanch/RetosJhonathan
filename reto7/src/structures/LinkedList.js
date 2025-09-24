class SongNode {
  constructor(song) {
    this.song = song;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  add(song) {
    const newNode = new SongNode(song);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}
