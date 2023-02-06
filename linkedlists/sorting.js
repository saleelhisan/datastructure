class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    } 
    addNode(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    } 
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
    bubbleSort() {
      let currentNode = this.head;
      let swapped;
      do {
        swapped = false;
        while (currentNode.next !== null) {
          if (currentNode.data > currentNode.next.data) {
            let temp = currentNode.data;
            currentNode.data = currentNode.next.data;
            currentNode.next.data = temp;
            swapped = true;
          }
          currentNode = currentNode.next;
        }
        currentNode = this.head;
      } while (swapped);
    }
  }
  
  const myList = new LinkedList();
  myList.addNode(5);
  myList.addNode(2);
  myList.addNode(7);
  myList.addNode(1);
  console.log("Original list: ");
  myList.printList();
  
  myList.bubbleSort();
  console.log("Sorted list: ");
  myList.printList();
  