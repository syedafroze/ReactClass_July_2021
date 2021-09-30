import {useState,useEffect} from 'react';
import Fun from './hooks1'
function UseEffectExample(){
  
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(5) ;
const [flag,setFlag] =useState(true);

    const handleCount =()=>{
        setCount(count+1) ;
        setFlag(!flag)
    }


    useEffect(()=>{console.log("--useEffect as componnetDidMount--")}   , [])
   
    useEffect(()=>console.log("--useEffect as componentDidUpdate--") , [count,num])


    

    return <div>
        <h2>Count is {count} </h2>
      {flag?  <Fun></Fun> : null}
        <button onClick ={handleCount}>InC Count</button>

    </div>
}



export default UseEffectExample;

