/*
202405519

Baseline script to create an empty local database file to store user transcripts and open AI outputs when JSON files are accessiable.
Next step is to build a pipeline to process the txt file into a csv-parser to build tables in the database to identify: index of txt file to match to JSON content, date metadata, transcript text, and possibly file name to prevent duplicates.

Following that is using sqlite3 to store the table into the database file.

The table currently has no data to test.

will need:
npm install sqlite3 mammoth csv-parser --no-save
*/

const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Function to create the database file if it doesn't exist
function createDatabaseFile(dbFile) {
  // Check if transcript.db exists, if not, create it
  if (!fs.existsSync(dbFile)) {
    // Creates the transcript.db file by opening it and closing
    fs.closeSync(fs.openSync(dbFile, 'w'));
    console.log(`Database file '${dbFile}' created successfully`);
  } else {
    console.log(`Database file '${dbFile}' already exists`);
  }
}

// Function to create a connection to the SQLite database
function createConnection(dbFile) {
  const db = new sqlite3.Database(dbFile);
  console.log(`Connected to SQLite database at ${dbFile}`);
  return db;
}

function createTable(conn) {
  // table can be edit as needed to fit the data needs
  const createTableSql = `
      CREATE TABLE IF NOT EXISTS transcripts (
          id INTEGER PRIMARY KEY,
          file_name TEXT UNIQUE,
          content TEXT NOT NULL
      );
  `;
  // test to see contents of table
  conn.run(createTableSql, function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table created successfully');

      // Query the contents of the table
      conn.all('SELECT * FROM transcripts;', function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          // Print the rows to the console
          console.log("Contents of the 'transcripts' table:");
          console.table(rows);
        }
      });
    }
  });
}

// Main function
async function main() {
  //File pathway for the transcript database for sql lite
  const database = path.join(__dirname, 'transcripts.db');
  // print statement to identify which function is bein called
  console.log(`Creating database file at '${database}'`);
  // passes the database pathway to the createdatabase function
  createDatabaseFile(database);
  const conn = createConnection(database);
  // passes conn to
  createTable(conn);
}

// Run the main function
main();
