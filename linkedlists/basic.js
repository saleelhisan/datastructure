class Node {
    constructor(element){
        this.element = element          
        this.next = null
    }
}
class Linkedlist {
    constructor(){
        this.head = null ;
        this.size = 0;                    
    }
    addAtFirst(element){
        const node = new Node(element)             
        if(this.size == 0){                   
            this.head = node 
        }else {                                                               
            node.next = this.head            
            this.head = node 
        }
        this.size++                            
    }

    insertAtlast(element){
        const node = new Node(element)
        var current;
        if(this.size == 0){                   
            this.head = node
        }else{
           current = this.head   
           while(current.next){                
            current = current.next             
        }
         current.next = node;
        }
        this.size++
    }


    insertAtIndex(element,index){
        if(index < 0 || index > this.size){           
            return 
        }else{
            var node = new Node(element)           
            let curr,prev
            if(index == 0 ){                       
                node.next = this.head              
                this.head = node
            }else{
            curr = this.head                        
            var i 
            for(i = 0 ;i<index ;i++){
                prev = curr                                   
                curr = curr.next
            }
                node.next = curr;
                prev.next = node            
        }
        this.size++
    }
    }

    removeFrom(index){
       if(index < 0 || index > this.size){
        return null
       }else{
        let curr = this.head
        let prev = null
        if(index == 0){
            this.head = curr.next
        }else{
            let i 
            while(i < index){
                i++
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next 
        }
        this.size--;
        return current.element
       }

    }

  


    printList(){
        var current = this.head                 
        var str = "";                             
        while(current){
            console.log(current.element);        
            current = current.next 
        }
    }
    
}




const ls = new Linkedlist()


ls.addAtFirst(100);
ls.addAtFirst(200)
ls.addAtFirst(300)
// ls.insertAtlast(400)



ls.printList()
ls.removeFrom(1);
console.log('-----------------------------');
ls.printList()
