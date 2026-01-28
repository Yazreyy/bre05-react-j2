const User = (props) => {
    return(
       <article>
    <h2>Nom d'utilisateur {props.name}</h2>
    <a href="">Email de l'utilisateur {props.email}</a>
       </article>
)
}
export default User