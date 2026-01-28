const User = (props) => {
    return(
       <article>
    <h2>Prénom {props.user.firstName} et Nom {props.user.lastName}</h2>
    <a href="">Email de l'utilisateur {props.user.email}</a>
    </article>
)
}
export default User