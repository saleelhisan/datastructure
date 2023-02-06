class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}
class Linkedlist{
  constructor(){
    this.head = null 
  }


  add(value){
    const node = New Node(value)

    if(this.head == null){
        this.head = node
        return
    }

    let curr = this.head 

    while(curr.next != null){
        curr = curr.next
    }
       curr.next = node

  }

  replace(value1,value2){
    let current = this.head 
    while(current.next){
        if(current.value == value1){
            current.value = value2
            flag = 1
        }
        current = current.next
    }

    if(flag = 0)

  }

}
const ll = new Linkedlist()

ll.replace(2,5)