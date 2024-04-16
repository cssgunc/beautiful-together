import { db } from './firebase-config.js';
import { collection, addDoc } from 'firebase/firestore';


async function addMailDocument(first_name, last_name, address, country, city, state, zip_code, home_phone, cell_phone, email) {
    
 
    // Document data
    const mailData = {
      message: {
        subject: 'Adoption Request Notice',
        text: 'Notice:',
        html: 
        `<p>Hello,</p><p>We have received an adoption request from the following individual:</p><ul>` +
                `<li><strong>First Name:</strong> ${first_name}</li>` +
                `<li><strong>Last Name:</strong> ${last_name}</li>` +
                `<li><strong>Address:</strong> ${address}</li>` +
                `<li><strong>Country:</strong> ${country}</li>` +
                `<li><strong>City:</strong> ${city}</li>` +
                `<li><strong>State:</strong> ${state}</li>` +
                `<li><strong>Zip Code:</strong> ${zip_code}</li>` +
                `<li><strong>Home Phone:</strong> ${home_phone}</li>` +
                `<li><strong>Cell Phone:</strong> ${cell_phone}</li>` +
                `<li><strong>Email:</strong> ${email}</li>` +
            `</ul><p>Thank you for your attention.</p>`,
      },
      to: ['example@gmail.com'], //put test email here
    };
 
    



    try {
      console.log("test2");
      const docRef = await addDoc(collection(db, "mail"), mailData);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  export { addMailDocument };