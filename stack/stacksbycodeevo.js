class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }


    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    size(){
        return this.items.length
    }

    print(){
       console.log(this.items.toString());
    }
}

const s = new Stack();


s.push(10)
s.push(47)
s.push(22)


console.log(s.pop());

s.print();
