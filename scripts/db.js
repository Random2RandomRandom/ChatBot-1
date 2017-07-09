var pg = require('pg');
pg.defaults.ssl = true;
var client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.query("CREATE TABLE IF NOT EXISTS 
  users (
    ID int NOT NULL,
    money int NOT NULL,
    bank int NOT NULL,
    tribe id,
    PRIMARY KEY (ID)
)");
function getUser(id){
  if(id && typeof id == "number"){
   client
    .query('IF NOT EXISTSSELECT * FROM users WHERE id='+id)
    .on('row', function(row) {
      
    });
  }
}
function getMoney(id){
}
function depositMoney(){
}
function withdrawMoney(){}
function giveMoney(){}
function setMoney(){}
