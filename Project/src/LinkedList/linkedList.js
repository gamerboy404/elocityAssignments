// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList extends Node {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertAtHead = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  // Insert last node
  insertAtTail = (data) => {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  };

  // Insert at index
  insertAtIndex = (data, index) => {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  };

  // Get first Node
  getFirstNode = () => {
    let current = this.head;
    return current.data;
  };
  getLastNode = () => {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  };
  // Get at index
  getNodeAtIndex = (index) => {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
        return current.data;
      }
      count++;
      current = current.next;
    }

    return null;
  };

  getLength = () => {
    return this.size;
  };

  removeFirstNode = () => {
    let current = this.head;
    this.head = current.next;
    this.size--;
  };
  removeLastNode=()=>{
    let current = this.head;
    let previous;
    while (current.next) {
        previous = current;
        current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }
  removeNodeAtIndex = (index) => {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  };

  // Print list data
  printListData = () => {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };
}
const ll = new LinkedList;
export {Node, LinkedList};
