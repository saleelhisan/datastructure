var head ; 
class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}
function reverse(list){
    var prev = null
    var current = list 
    var next = null

    while(current != null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    list = prev
    return list
   
}

function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}
head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
console.log(head);
console.log(reverse(head));

printList(head)
