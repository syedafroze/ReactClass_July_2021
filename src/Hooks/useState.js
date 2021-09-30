
import { useState } from "react";


function UseStateExample(){
const [name,setName] = useState('');

const handleChange=(event)=>{
     setName(event.target.value)
}

const handleClick = () =>{
    let updateName = name.toUpperCase();
    setName(updateName)
}

    return <div>
        <h2>Name is {name}</h2>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>toUpperCase</button>
    </div>
}

export default UseStateExample