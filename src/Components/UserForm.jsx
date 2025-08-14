import InputField from "./InputField";
import { useState } from "react";
function UserForm({user,handleInputChange,handleAddSkill, handleRemoveSkill}){

    const[newSkill,setNewSkill] = useState('');
    function onAddSkill(){
        if(newSkill.trim()!=='')
        {
            handleAddSkill(newSkill);
            setNewSkill('');
        }
    }
    return(
        <div>
            <h2>Enter your information</h2>
            <InputField label="Name" type="text" name="name" placeholder="Enter name" value={user.name} handleInputChange={handleInputChange}></InputField>
            <InputField label="Email" type="email" name="email" placeholder="email@gmail.com" value={user.email} handleInputChange={handleInputChange}></InputField>
            <InputField label="City" type="text" name="city" placeholder="Enter city name" value={user.city} handleInputChange={handleInputChange}></InputField>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Bio</label><br/>
                <textarea 
                type="text" 
                name="bio" 
                placeholder="Short bio" 
                value={user.bio} 
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                rows={4}
                >
                </textarea>
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Skills</label>
                <div className="flex gap-2">
                    <input 
                    placeholder="e.g.,React" 
                    type="text" name="skills" 
                    value={newSkill} 
                    onChange={(e)=>{
                        setNewSkill(e.target.value);
                    }}
                    className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
                    ></input>
                    <button 
                    type="button" 
                    onClick={onAddSkill}
                    className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                {
                    user.skills.map((skill,index)=>{
                        return <span key={index} className="bg-indigo-500 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                            {skill}
                            <button
                            type="button"
                            onClick={() => handleRemoveSkill(index)}
                            className="ml-1 text-xs text-white hover:text-gray-300"
                            >
                                ❌
                            </button>
                        </span>
                    })
                }
            </div>
        </div>
    )
}
export default UserForm