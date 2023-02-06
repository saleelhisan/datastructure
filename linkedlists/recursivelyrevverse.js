// Recursive JavaScirpt program to reverse
// a linked list

// Link List node
class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
let head = null;
// Function to reverse the linked list
function reverse(node){
	if(node == null) return null;	
	if(node.next == null){
		head = node;
		return node;
	}	
	let node1 = reverse(node.next);
	node1.next = node;
	node.next = null;
	return node;
}

// Function to print linked list
function print(){
	let temp = head;
	while(temp != null){
		console.log(temp.data + " ");
		temp = temp.next;
	}
}

function push(data){
	let temp = new Node(data);
	temp.next = head;
	head = temp;
}

// Driver Code
push(20);
push(4);
push(15);
push(85);

console.log("Given Linked List ");
print();

reverse(head)

console.log("\nReversed Linked List");
print();

// This code is contributed by Yash Agarwal(yashagarwal2852002)
