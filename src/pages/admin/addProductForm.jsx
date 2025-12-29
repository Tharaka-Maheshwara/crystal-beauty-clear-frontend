import { Link } from "react-router-dom"

export default function AddProductForm() {  

    return(
        <div className="w-full h-full rounded-lg flex justify-center items-center   ">
            <div className="w-[500px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col items-center ">

<h1 className="text-3xl font-bold text-gray-700 m-[10px]">Add Products</h1>

<input   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="product ID"/>

<input   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="Product Name "/>

<input   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="Alternative Names"/>

<input   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="Price"/>

<input   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="Labled Price"/>

<textarea   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="Description"/>

<input   
className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"  
type="email" 
placeholder="Stock"/>

<div className="w-full h-[100px] flex justify-center items-center rounded-lg"> 
<Link to= {"/admin/products"} className="px-5 py-2.5 text-sm font-medium text-white bg-red-500 border border-gray-300 rounded-lg w-[200px] h-[50px] text-center hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-gray-100 transition-all">Cancel</Link>
<button className="px-5 py-2.5 text-sm cursor-pointer font-medium text-white bg-green-500 border h-[50px] border-gray-300 rounded-lg w-[200px] m-1 text-center hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-gray-100 transition-all">Add Product</button>
</div>

            </div>
        </div>
    )
}