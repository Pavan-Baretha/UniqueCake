import { useState, useEffect } from "react";
import axios from 'axios'
import Showdata from './Showdata'
function Myorders() {
   console.log("............................................................")
    var [myorders, setOrders] = useState();
    console.log(">>>>>>>>>>>>>>>> my order" , myorders )

    useEffect( ()=> {
        axios({
            url: "https://apibyashu.herokuapp.com/api/cakeorders",
            method: "post",
            data: { email: localStorage.email },
            headers: {
                authtoken: localStorage.token
            }
        }).then((response)=>{
            console.log(">>>>>>>>>>>>>>>>>>>>>> orders received" , response.data)
            setOrders(response.data.cakeorders)
        })
    },[])




    return (<div>
        {myorders && myorders.length > 0 && myorders.map((x, index) => {
        //    return (<h1 key={index}>{each.orderid}</h1>)
        return(
            <Showdata  key1={index} myorders={x} />
        )
                
        })}
    </div>)






}
export default Myorders;