// JavaScript program for linked-list implementation of queue
class QNode
{
	constructor(key)
	{
		this.key = key;
		this.next = null;
	}
}

let front = null, rear = null;

function enqueue(key)
{
		let temp = new QNode(key);
		if (rear == null) {
			front = rear = temp;
			return;
		}

		rear.next = temp;
		rear = temp;
}


function dequeue()
{
		if (front == null)
			return;
		let temp = front;
		front = front.next;

		if (front == null)
			rear = null;
}


enqueue(10);
enqueue(20);
console.log("Queue Front : " + front.key);
console.log("Queue Rear : " + rear.key);


