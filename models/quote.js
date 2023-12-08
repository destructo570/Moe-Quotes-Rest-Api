const db = require("../utils/database")
module.exports = class Quote {
  constructor(id, quote, anime, character) {
    this.id = id;
    this.quote = quote;
    this.anime = anime;
    this.character = character;
  }

  save(){
    return db.execute('INSERT INTO quotes (quote, anime, character) VALUES (?, ?, ?, ?)', 
    [null, this.quote, this.anime, this.character]);
  }

  static delete(){
    
  }

  static fetchAll(){
    return db.execute('SELECT * FROM quotes');
  }

  static findById(id){
    
  }

};