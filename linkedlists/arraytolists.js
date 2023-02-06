class Node {
	constructor(value){
		this.value = value
		this.next = null 
	}	
}

function arrayToLists(arr){
	let head = new Node(arr[0])
	let current = head 
	for(i = 1 ; i< arr.length ; i++){
		current.next = new Node(arr[i])
		current = current.next
	}
        let curr = head
        while (curr){
            console.log(curr.value);
            curr = curr.next;
        }
	return head 
}


let array = [1,3,5,7]
console.log(arrayToLists(array));