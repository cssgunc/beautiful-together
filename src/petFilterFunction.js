/* Create function to filter pets based on csv data and user info
    import db

   Header (eg name, color)
   condition - desired values
   fetch data function - use syntax
*/

import db from './firebase-config';
import { getDocs } from 'firebase/firestore';

var docs; // Variable to hold all documents from one of the collections - cats or dogs
var headers; // Array to hold all headers that you can filter by
var values; // Map to hold all possible values given a header

// Call this on an array of filters created using createFilter() to get filtered data
function filterData(filters) {
  return this.docs.filter(item =>
    filters.every(filter => filter(item))
  );
}

// Column should be one of the headers
// Comparator should be '<', '==', '>', or similar
// Value should be a value from the headers
function createFilter(header, comparator, value) {
  if (header in headers) {
    if (value in values.get(header) ) {
      return ( item => item.where(column, comparator, value).get() );
    }
  }
  else {
    console.log("Invalid header or value");
    return ( item => item );
  }
}

// call this with either "cats" or "dogs" to set docs, header, and values fields
async function fetchData(type) {
  switch(type) {
    case "cats":
      var q = query(collection(db, "cats"));
      _fetchData(q);
      break;
    case "dogs":
      var q = query(collection(db, "dogs"));
      _fetchData(q);
      break;
  }
}

async function _fetchData(q) {
  getDocs(q).then(querySnapshot => {
    this.docs = [];
    querySnapshot.forEach(doc => {
      this.docs.push(doc.data());
    });

    this.headers = getHeaders(this.docs);
    this.values = new Map();
    
    this.headers.forEach(header => {
      this.values.set(header, this.getValuesFromHeader(this.docs, header));
    });
  })
  .catch(error => {
    console.error("Error fetching documents: ", error);
  });
}

// Get all the different headers (column names), like Intake Date, Age, etc.
function getHeaders(docs) {
  const headers = new Set();
  docs.forEach(doc => {
    Object.keys(docs).forEach(key => {
      headers.add(key);
    });
  });
  return Array.from(headers);
}

function getValuesFromHeader(docs, header) {
  return new Set(docs.map(doc => doc[header]).filter(value => value !== undefined) );
}