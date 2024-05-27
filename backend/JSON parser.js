const fs = require('fs'); //import file systems which allows us to read and write files. Such as JSON and CSV
const json2csv = require('json2csv').Parser; //testing the parase by opening it in python / pandas

// Read the JSON file
const readJsonFile = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8'); // Maybe need to change to asynchronous file reading when app is deployed; currently for testing purposes
    return JSON.parse(jsonData); // Parse the JSON data
  } catch (err) {
    //catchs error
    console.error('Error reading JSON file:', err); //prints out error
    return null; //return null if error
  }
};

// Convert JSON data to CSV format; used to test how the files appear in a dataframe. Easier to push to tables in sql
const jsonToCsv = (data) => {
  const fields = Object.keys(data[0]); // Gets the column names from the JSON file; This will pull the keys that represent the column headers
  const opts = { fields }; // create a "list" of colmns we want in out CSV
  const parser = new json2csv(opts); // create a new instance of json2csv, defines how JSON will be converted to CSV. Uses the package
  return parser.parse(data); // converts JSON to CSV
};

// Function to flatten JSON object
const flattenJson = (obj, prefix = '') => {
  const flattened = {}; //create an empty object for empty data
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      //checks to see if the value asociated is an Object. Used to know if we have a nested objected
      Object.assign(flattened, flattenJson(obj[key], prefix + key + '_')); //recursivelty flatten the object by using its key name and adds a prefix + loop number/key, this will blow up the width of the
    } else {
      flattened[prefix + key] = obj[key]; //add key-value pair to the flattened object. Uses key with current prefix to maintain the hierarchy
    }
  }
  return flattened;
};

// Specify the path to the JSON file
const jsonFilePath = 'data.json';

// Read the JSON file
console.log('Reading JSON file...');
const jsonData = readJsonFile(jsonFilePath);

if (jsonData) {
  // Flatten the JSON data
  console.log('Flattening JSON data...');
  const flattenedData = flattenJson(jsonData);

  // Log flattened data to the console
  console.log('Flattened data:');
  console.log(flattenedData);

  // Convert flattened JSON data to CSV format
  console.log('Converting JSON data to CSV...');
  const csvData = jsonToCsv([flattenedData]);

  // Log CSV data to the console
  console.log('CSV data:');
  console.log(csvData);

  // Write CSV data to a file
  console.log('Writing CSV file...');
  fs.writeFile('parsed_data_csv.csv', csvData, (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
    } else {
      console.log('CSV file saved successfully');
    }
  });
} else {
  console.log('No JSON data found.');
}
