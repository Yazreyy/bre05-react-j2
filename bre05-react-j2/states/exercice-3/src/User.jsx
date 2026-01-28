import {useState} from 'react'

const User = ({role}) =>{
   const [isOn, setisOn] = useState(false);
 
   
   let message 
   if(isOn === true){
       message = <p>En ligne</p>
   }else {
       message = <p> Hors Ligne</p>
   }
   return(
       <article>
    <h2>Mari Doucet</h2>
    <h3>{role}</h3>
       {message}
       </article>
       
       
       )
}

export default User