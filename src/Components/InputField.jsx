function InputField({label,type,name,placeholder,value,onChange}){
    return(
        <div style={{ marginBottom: '12px' }}>
            <label>{label}</label><br/>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}> 
            </input>
        </div>
    )
}
export default InputField