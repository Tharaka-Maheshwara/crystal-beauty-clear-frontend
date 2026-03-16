import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductsPage from "./client/productsPage";
import ProductOverView from "./client/productOverView";

export default function HomePage() {
  
    return(
        <div className="w-full h-screen max-h-screen ">
            <Header/>

           <div className="w-full min-h-[(calc(100vh-70px))]">
              <Routes path = "/*">
                 <Route path="/" element={<h1>Home Page</h1>}/>
                  <Route path="/products" element={<h1><ProductsPage/></h1>}/>
                   <Route path="/overview/:id" element={<ProductOverView/>}/>
                  <Route path="/*" element={<h1>404 Not Found</h1>}/>
                </Routes>     
           </div>
        </div>
    )
} 