class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
        let obj =   {
            value: value,
            next: null
        };
      this.tail.next = obj;
      this.tail = obj;
      this.length++;
    }

    prepend(value){
        let obj = {
            value: value,
            next: null
        };
        obj.next = this.head;
        this.head = obj;
        this.length++;
    }

    lookup(value){
        let obj = this.head;
        while(obj && value != obj.value){
            obj = obj.next;
        }
        return obj ? obj.value : obj;
    }

    insert(value, at){
        let obj = this.head;
        if(obj.value == at){
            this.prepend(value);
            return;
        }
        while(obj.next && at != obj.next.value){
            obj = obj.next;
        }
        if(obj){
            let currentNext = obj.next;
            obj.next = {
                value: value,
                next: currentNext
            };
            this.length++;
            return;
        }
        throw "Index not found";
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(28);
  myLinkedList.insert(55,5);
  console.log(myLinkedList.lookup(16));
  console.log(myLinkedList.lookup(42));
  console.log(myLinkedList);
  console.log( myLinkedList.insert(55,58));