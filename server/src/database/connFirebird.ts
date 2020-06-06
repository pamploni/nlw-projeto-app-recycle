import knex from 'knex';
import path from 'path';


import fb from 'node-firebird';

const fbParam = {
  host: '192.168.0.11',
  port: 3050,
  database: 'd:\\Clientes\\Polimassas\\Malvinas\\PLBASE.FDB',
  user: 'sysdba',
  password: 'masterkey',
  lowercase_keys: false,
  
};

/* 
const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  }
});
 */


// utilizae para converter
function ab2str(buf: ArrayBuffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
};

function str2ab(str) {
  var buf = new ArrayBuffer(str.length*2);
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }

  return buf;
}



  const promiseDB = new Promise((res, rej) => {
    fb.attach(fbParam, function(err, db) {
      if (err) {
        rej(new Error("Deu ruim, mano"));
      } else {
        res(db);
      }
      
    })

  
  }
  
  
 

const queryFB = async function(sql) {
  promiseDB.then(
    function(dbconn){
      const db = dbconn;
      db.query(sql,)
    }
  )
}


});

export default connfb;

