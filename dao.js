var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = './db/test.db'

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            host text,
            port text, 
            password text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('table already created')
            }
        });  
    }
});


module.exports = db