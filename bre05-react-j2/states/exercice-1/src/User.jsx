import {useState} from 'react'



function User(){
    const [isOn, setisOn] = useState(false);
    let message
    if(isOn === true){
        
      message = <p>En Ligne</p>
            
    } else {
        
      message = <p>Hors Ligne</p>
            
    }
    
    return(
        <article>
    <h2>Mari Doucet</h2>
    <p>Statut de l'utilisateur</p>
    {message}
        </article>
        
        )
}

export default User