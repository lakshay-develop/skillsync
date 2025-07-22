import { useState } from "react";
import UserCard from "./UserCard";
function UserProfile(){
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const [showCard,setCard] = useState(false);

    function userName(e){
        setName(e.target.value);
    }
    function userAge(e){
        setAge(e.target.value);
    }
    function userCity(e){
        setCity(e.target.value);
    }
    function userCard(){
        if(name && age && city)
        {
            setCard(true);
        }
        else{
            alert("Please enter all fields");
        }
    }
    return(
        <div>
            <div>
                <label>Name</label>
                <input type="text" placeholder="your Name" onChange={userName} value={name}></input>
            </div>
            <div>
                <label>Age</label>
                <input type="number" placeholder="your age" onChange={userAge} value={age}></input>
            </div>
            <div>
                <label>City</label>
                <input type="text" placeholder="your city" onChange={userCity} value={city}></input>
            </div>
            <div>
                <button onClick={userCard}> Submit </button>
            </div>
           {showCard && <UserCard name={name} age={age} city={city}></UserCard>}
        </div>
    )
}
export default UserProfile