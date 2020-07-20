import { Node, LinkedList } from "../../src/LinkedList/linkedList.js";

describe("a Class that creates a a linked list data type", () => {
  it("test 1 insert at head", () => {
    let ll = new LinkedList;
    ll.insertAtHead(100);
    expect((ll.head.data)).toEqual(100);
   
    ll.insertAtHead(200);
    expect((ll.head.data)).toEqual(200);
    expect((ll.getFirstNode())).toEqual(200);

    
  });
  it("test 2 insert at Tail", () => {
    let ll = new LinkedList;
    ll.insertAtTail(300); 
    expect((ll.getLastNode())).toEqual(300);
    
    ll.insertAtTail(400); 
    expect((ll.getLastNode())).toEqual(400);
  
  });
  it("test 3 insert at index", () => {
    let ll = new LinkedList;
    ll.insertAtIndex(100, 0);
    ll.insertAtIndex(200, 1);
    ll.insertAtIndex(300, 2);
    ll.insertAtIndex(500, 3); 
    expect((ll.getNodeAtIndex(2))).toEqual(300); 
    expect((ll.getNodeAtIndex(3))).toEqual(500);
  
  });


});