function InputField({label,type,name,placeholder,value,handleInputChange}){
    return(
        <div className="mb-4">
            <label className="block mb-1 font-medium">{label}</label><br/>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"> 
            </input>
        </div>
    )
}
export default InputField