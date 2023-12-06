import { useEffect, useState } from "react"
import "../style.css"
import  Axios  from "axios";
import { Card } from "./card";


export function Main(){
    const [prod, setprod] = useState([]);
    useEffect(()=>{
        Axios.get("https://dummyjson.com/products")
        .then((msg)=>setprod(msg.data.products))
        .catch((err)=>alert(err))
    },[]);
    return(
        <div>
        {/* <h1 class="c1">Main</h1> */}
        {/* {
            console.log(prod)
        } */}
        <div class="row">
        {
            prod.map((val)=>{
                return(<Card obj={val}/>)
            })
        }
        </div>
        <h1 class="text-success">Bootstrap</h1>
        </div>
    )
    
}