class HashTable {
    
    constructor(size){
        this.data = new Array(size);
        this.keyplace = 0;
        this.valueplace = 1;
        this.next = 2;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key = "" , value = 0 ){
        let hash = this._hash(key);
        let instanceAtHash = this.data[hash];
        if(instanceAtHash){
            insertInHashTable(instanceAtHash, key, value);
            return;
        }
        this.data[hash] = [key, value, null];
    }

    insertInHashTable(instanceAtHash, key, value){
        if(instanceAtHash){
            this.insertInHashTable(instanceAtHash[this.next], key, value); 
        }
        instanceAtHash[this.next] = [key, value, null];
    }

    get(key){
        let hash = this._hash(key);
        let res = this.data[hash];
        if(res){
            if(res[this.keyplace] === key){
                return res[this.valueplace];
            } 
            return getInstanceLinked(res[this.next], key);
        }
    }

    getInstanceLinked(res, key){
        if(!res) {return "Wrong Key";}
        return res[this.keyplace] === key ? res[this.valueplace] : this.getInstanceLinked(res[this.next])
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  console.log(myHashTable.get('apples'))