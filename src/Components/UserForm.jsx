import InputField from "./InputField";
function UserForm({user,handleInputChange}){
    
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
        </div>
    )
}
export default UserForm