// Javascript program to Implement a stack
// using singly linked list
// import package

// A linked list node
class Node
{
	constructor()
	{
		this.data=0;
		this.link=null;
	}
}

// Create Stack Using Linked list
class StackUsingLinkedlist
{
	constructor()
	{
		this.top=null;
	}
	
	// Utility function to add an element x in the stack
	push(x)
	{
		// create new node temp and allocate memory
		let temp = new Node();

		// check if stack (heap) is full. Then inserting an
		// element would lead to stack overflow
		if (temp == null) {
			console.log("<br>Heap Overflow");
			return;
		}

		// initialize data into temp data field
		temp.data = x;

		// put top reference into temp link
		temp.link = this.top;

		// update top reference
		this.top = temp;
	}
	
	// Utility function to check if the stack is empty or not
	isEmpty()
	{
		return this.top == null;
	}
	
	// Utility function to return top element in a stack
	peek()
	{
		// check for empty stack
		if (!this.isEmpty()) {
			return this.top.data;
		}
		else {
		console.log("Stack is empty<br>");
			return -1;
		}
	}
	
	// Utility function to pop top element from the stack
	pop() // remove at the beginning
	{
		// check for stack underflow
		if (this.top == null) {
			console.log("<br>Stack Underflow");
			return;
		}

		// update the top pointer to point to the next node
		this.top = this.top.link;
	}
	
	display()
	{
		// check for stack underflow
		if (this.top == null) {
			console.log("<br>Stack Underflow");
			
		}
		else {
			let temp = this.top;
			while (temp != null) {

				// print node data
				console.log(temp.data+"->");

				// assign temp link to temp
				temp = temp.link;
			}
		}
	}
}

let obj = new StackUsingLinkedlist();


obj.push(10)
obj.push(20)
obj.pop()

obj.display();
