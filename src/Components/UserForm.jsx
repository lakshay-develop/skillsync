import { useState } from "react";
import InputField from "./InputField";
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
            <InputField label="Name" type="text" name="name" placeholder="Enter name" value={formData.name} onChange={formChange}></InputField>
            <InputField label="Email" type="email" name="email" placeholder="email@gmail.com" value={formData.email} onChange={formChange}></InputField>
            <InputField label="City" type="text" name="city" placeholder="Enter city name" value={formData.city} onChange={formChange}></InputField>
            <div>
                <label>Bio</label><br/>
                <textarea type="text" name="bio" placeholder="Short bio" value={formData.bio} onChange={formChange}></textarea>
            </div>
        </div>
    )
}
export default UserForm