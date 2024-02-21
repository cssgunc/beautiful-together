import { addMailDocument } from "../responseEmail.js";
export const PetForm = () => {

    async function callAddMailDocument() {
        try {
            console.log("test");
          await addMailDocument(
            'John', 
            'Doe', 
            '123 Main St', 
            'USA', 
            'Anytown', 
            'CA',
            '90001', 
            '555-1234', 
            '555-5678', 
            'john.doe@example.com' 
          );
          console.log('email sent');
        } catch (error) {
          console.error('email not sent', error);
        }
      }

      
    return (
        <div>
            <header>Pet Preference Form</header>
            
            <button onClick={() => callAddMailDocument()}>Click Me</button>
        </div>

    );


    
}