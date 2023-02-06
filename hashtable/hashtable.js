function HashTable() {
    this.table = {};
  }
  
  HashTable.prototype.insert = function(key, value) {
    this.table[key] = value;
  };
  
  HashTable.prototype.lookup = function(key) {
    return this.table[key];
  };
  
  HashTable.prototype.delete = function(key) {
    delete this.table[key];
  };
  
  // Create a new hash table
  let table = new HashTable();
  
  // Insert some key-value pairs
  table.insert('name', 'John');
  table.insert('age', 30);
  table.insert('city', 'New York');
  
  // Look up the value for a key
  console.log(table.lookup('name')); // prints 'John'
  
  // Delete a key-value pair
  table.delete('age');
  
  // Look up the value for a key that was deleted
  console.log(table.lookup('age')); // prints undefined
  