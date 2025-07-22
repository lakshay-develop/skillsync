function UserCard(props){
    return(
        <div>
            <p>Name {props.name}</p>
            <p>Age {props.age}</p>
            <p>Age {props.city}</p>
        </div>
    )
}
export default UserCard;