import { Node, LinkedList } from "../../src/LinkedList/linkedList.js";

describe("a Class that creates a a linked list data type", () => {
  it("test 1 insert at head", () => {
    let ll = new LinkedList;
    ll.insertAtHead(100);
    expect((ll.head.data)).toEqual(100);
    ll.insertAtHead(200);
    expect((ll.head.data)).toEqual(200);
    ll.removeFirstNode();
    expect((ll.head.data)).toEqual(100);
  });
});