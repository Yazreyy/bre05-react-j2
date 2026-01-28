import {useState} from 'react'

function User(){
    const [isOn, setisOn] = useState(false);
    const [Role, setRole] = useState("Anonyme");
    
    let message 
    if(isOn === true){
        message = <p>En ligne</p>
    } else {
        message = <p>Hors ligne</p>
    }
    
    let status
    
    
    return(
        <article>
        <h2>Mari Doucet</h2>
        <h3>{Role}</h3>
        <p>{message}</p>
        
        </article>
        
        
        
        )
}

export default User