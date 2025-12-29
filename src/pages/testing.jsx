import { useState } from "react";

export default function Testing() {
const [number , setNumber] =   useState(0)   
const [status, setStatus] = useState("Pending")


function increment() {

 setNumber(number +1);
}

function decrement() {
  
  setNumber(number -1);
}

return(
    <div className="w-full h-screen flex flex-col justify-center items-center ">
        <span className="text-3xl font-bold">{number}</span>
        <div className="w-full flex justify-center">
            <button onClick={increment} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer ">+</button>
            <button onClick={decrement} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer">-</button>
        </div>


<span className="text-3xl font-bold">{status}</span>
        <div className="w-full flex justify-center">
            <button onClick={()=>{
                setStatus("Passed")
            }} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer ">Pass</button>
            <button onClick={()=>{
                setStatus("Failed")
            }} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer">Fail</button>
        </div>

    </div>
)

}