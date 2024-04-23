/* Create function to filter pets based on csv data and user info
    import db

   Header (eg name, color)
   condition - desired values
   fetch data function - use syntax
*/

import db from './firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';

var filtered_docs;
var cats_docs; // Variables to hold all documents from one of the collections - cats or dogs
var dogs_docs;
var cats_headers; // Arrays to hold all headers that you can filter by
var dogs_headers;
var cats_values; // Maps to hold all possible values given a header
var dogs_values;

// Some example filters that may be commonly used
// Note that headers for cats are capitalized, but headers for dogs are not
const availableDogsFilter = createFilter("status", "==", "Available");
const availableCatsFilter = createFilter("Status", "==", "Available")
const trainedDogsFilter = createFilter("trained", "==", "I'm Trained");
const trainedCatsFilter = createFilter("Trained", "==", "I'm Litterbox Trained");

// age can be "Baby", "Kitten"/"Puppy", "Youth", or "Adult"
function ageDogsFilter(age) {
  return createFilter("age", "==", age);
}
function ageCatsFilter(age) {
  return createFilter("Age", "==", age);
}

// call this function first to populate headers, values, and docs fields
async function initData() {
  getDocs(query(collection(db, "dogs"))).then(querySnapshot => {
    this.dogs_docs = [];
    querySnapshot.forEach(doc => {
      this.dogs_docs.push(doc.data());
    });

    this.dogs_headers = getHeaders(this.dogs_docs);
    this.dogs_values = new Map();
    
    this.dogs_headers.forEach(header => {
      this.dogs_values.set(header, this.getValuesFromHeader(this.dogs_docs, header));
    });
  })
  .catch(error => {
    console.error("Error fetching dog documents: ", error);
  });
  getDocs(query(collection(db, "cats"))).then(querySnapshot => {
    this.cats_docs = [];
    querySnapshot.forEach(doc => {
      this.cats_docs.push(doc.data());
    });

    this.cats_headers = getHeaders(this.cats_docs);
    this.cats_values = new Map();
    
    this.cats_headers.forEach(header => {
      this.cats_values.set(header, this.getValuesFromHeader(this.cats_docs, header));
    });
  })
  .catch(error => {
    console.error("Error fetching cat documents: ", error);
  });
}

// call this with either "cats" or "dogs" to set docs, header, and values fields,
// and an array of filters each created by a call to createFilter()
async function fetchData(type, filters) {
  switch(type) {
    case "cats":
      var q = query(collection(db, "cats"));
      break;
    case "dogs":
      var q = query(collection(db, "dogs"));
      break;
  }
  filters.forEach( filter => {
    q = query(q, where(filter.field, filter.operator, filter.value));
  });
  _fetchData(q).then(() => {
    return this.filtered_docs;
  });
}

// Column should be one of the headers
// Operator should be '<', '==', '>', "!=", "in", "not-in", or other valid operators defined by Firestore
// Value should be a value from the headers
function createFilter(header, operator, value) {
  if (header in headers && value in values.get(header)) {
    return  { field: 'header', 'operator': operator, 'value': value };
  }
  else {
    console.log("Invalid header or value");
    return null;
  }
}

async function _fetchData(q) {
  getDocs(q).then(querySnapshot => {
    this.filtered_docs = [];
    querySnapshot.forEach(doc => {
      this.filtered_docs.push(doc.data());
    });
  })
  .catch(error => {
    console.error("Error fetching documents: ", error);
  });
}

async function initData() {
  getDocs(query(collection(db, "dogs"))).then(querySnapshot => {
    this.dogs_docs = [];
    querySnapshot.forEach(doc => {
      this.dogs_docs.push(doc.data());
    });

    this.dogs_headers = getHeaders(this.dogs_docs);
    this.dogs_values = new Map();
    
    this.dogs_headers.forEach(header => {
      this.dogs_values.set(header, this.getValuesFromHeader(this.dogs_docs, header));
    });
  })
  .catch(error => {
    console.error("Error fetching dog documents: ", error);
  });
  getDocs(query(collection(db, "cats"))).then(querySnapshot => {
    this.cats_docs = [];
    querySnapshot.forEach(doc => {
      this.cats_docs.push(doc.data());
    });

    this.cats_headers = getHeaders(this.cats_docs);
    this.cats_values = new Map();
    
    this.cats_headers.forEach(header => {
      this.cats_values.set(header, this.getValuesFromHeader(this.cats_docs, header));
    });
  })
  .catch(error => {
    console.error("Error fetching cat documents: ", error);
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

export {
  dogs_docs,
  cats_docs,
  dogs_headers,
  cats_headers,
  dogs_values,
  cats_values,
  availableCatsFilter,
  availableDogsFilter,
  trainedCatsFilter,
  trainedDogsFilter,
  ageCatsFilter,
  ageDogsFilter,
  fetchData,
  createFilter,
}