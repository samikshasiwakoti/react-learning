

import {Welcome} from './Welcome';
import Button from './Button';
import { Hello } from './Hello';
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import './App.css'

 function App()
 {
  return (
    
           <div>
            <Product 
            title ="Gaming laptop"
             price= {1299.99} 
             inStock={true} 
             categories={["Electronic","Gaming","Laptops"]}
             />


            <Welcome  name ="sami" alias="superwomen"/>
            <Welcome  name ="Asmi" alias="wonder woman"/>
            <Welcome  name ="Bruce" alias="Batman"/>

            <CandidateProfile />
            <StyledForm />
            <ContactForm />
            <UserProfile/>
           <Hello />
            <Welcome />
            <Button />
           </div>
               
           
  
   
  );
}
/*<h1>
              //Just sarting react this was added in place of hello befoe
            </h1>*/ 
export default App
