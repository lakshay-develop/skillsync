import { useState } from "react";
function UserForm({onFormChange}){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        city:'',
        bio:''
    })
    function formChange(e){
        let property_name = e.target.name;
        let property_value = e.target.value;
        let updatedData = {...formData,[property_name]:property_value}
        setFormData(updatedData);
        onFormChange(updatedData);
    }
    return(
        <div>
            <h2>Enter your information</h2>
            <input type="text" name="name" placeholder="name" value={formData.name} onChange={formChange}></input>
            <br/>
            <input type="email" name="email" placeholder="email@gmail.com" value={formData.email} onChange={formChange}></input>
            <br/>
            <input type="text" name="city" placeholder="city name" value={formData.city} onChange={formChange}></input>
            <br/>
            <textarea type="text" name="bio" placeholder="Short bio" value={formData.bio} onChange={formChange}></textarea>
            <br/>
        </div>
    )
}
export default UserForm