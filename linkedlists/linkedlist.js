

//for creating node 
class Node {
    constructor(data,next = null){
        this.data= data;
        this.next= next;
    }
}

//for creating linked list
class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0
    }
    //insrting at first
    insertFirst(data){
        this.head = new Node(data,this.head)
        this.size++
    }

    //inserting at last
    insertAtLast(data) {
        let node = new Node(data);
        let current;
    
        // If empty, make head
        if (this.head == null) {
          this.head = node;
        } else {
          current = this.head;
    
          while (current.next != null) {
            current = current.next;
          }
    
          current.next = node;
        }
    
        this.size++;
      }

    //insert at index

    insertAtIndex(data,index){
        if(index >this.size){
            return;
        }
        if(index == 0){
        this.head = new Node(data,this.head);           
        }
        const node = new Node(data)
        let previous,current;
        current = this.head
        let count = 0

        while(count<index){
            previous = current;
            count ++;
            current = current.next;
        }

        node.next = current;
        previous.next = node ;
        this.size++
   }

   //getatindex
   getAtIndex(index){
    let current = this.head
    let count = 0
    while(current != null){
        if(count == index){
            console.log(current.data)
        }
        count++;
        current = current.next;
    }
    return null;
   }

   //remove at index
   removeAt(index){
    if(index > this.size){
        return;
    }
    let current = this.head ;
    let previous;
    let count = 0

    if(index == 0){
        this.head = current.next;

    }else{
        while(count<index){
            count++;
            previous = current;
            current = current.next
        }
        previous.next = current.next;
    }
    this.size--;

   }

    //to print all the data
    printListData(){
        let current = this.head
        while (current){
            console.log(current.data);
            current = current.next;

        }
    }

}

const ll =new LinkedList();

ll.insertFirst(100)
ll.insertAtLast(200)
ll.insertAtLast(300)
// ll.insertAtLast(400)
ll.insertAtIndex(500,2)

// ll.printListData();
ll.getAtIndex(0)



// console.log(ll)