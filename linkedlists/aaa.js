class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
let head = null;
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
push(20);
push(4);
push(15);
push(85);
reverse(head)
