class Trie {
  constructor(){
    this.trie = []
  }

  insert(word) {
    return this.search(word)? this.trie.push(word) : null
  }

  search(word) {
    return this.trie.find(curr => curr == word)? true : false
  }

  startsWith(prefix) {
    var i = 0
    var length = this.trie.length

    while(i < length) {
      var preWord = this.trie[i].slice(0,prefix.length)
      if (preWord == prefix) {
        return true
      }
      i++
    }

    return false
  }
}

const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True



// var Trie = function() {
//   var trie = []
// };

// /** 
// * @param {string} word
// * @return {void}
// */
// Trie.prototype.insert = function(word) {
//   trie.push(word)
// };

// /** 
// * @param {string} word
// * @return {boolean}
// */
// Trie.prototype.search = function(word) {
//   trie.find(curr => curr == word)? true : false  
// };

// /** 
// * @param {string} prefix
// * @return {boolean}
// */
// Trie.prototype.startsWith = function(prefix) {

// };

// /** 
// * Your Trie object will be instantiated and called as such:
// * var obj = new Trie()
// * obj.insert(word)
// * var param_2 = obj.search(word)
// * var param_3 = obj.startsWith(prefix)
// */