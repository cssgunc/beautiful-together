/* Create function to filter pets based on csv data and user info
    import db

   Header (eg name, color)
   condition - desired values
   fetch data function - use syntax
*/

import db from './firebase-config';

//Function to select user parameters for filtering



// Function to filter data server-side based on user parameters
const fetchData = async () => {
    const snapshot = await db.collection('csvData')
                             .where('age', '>', 30)
                             .get();
    const docs = snapshot.docs.map(doc => doc.data());
    setData(docs);
  };