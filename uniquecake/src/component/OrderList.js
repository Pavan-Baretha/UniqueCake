import { useState, useEffect } from "react";
import axios from 'axios'

function OrderList() {
   console.log("............................................................")
    var [orders, setOrders] = useState();

    useEffect(function () {
        axios({
            url: "httpS://apibyashu.herokuapp.com/api/cakeorders",
            method: "post",
            data: { email: localStorage.email },
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {

            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",response.data);
            var data = response.data.cakeorders
            setOrders(data);
            console.log("order items", orders);

        }, (error) => { console.log(error) })
    },[])




    return (<div>
        {orders && orders.length > 0 && orders.map((each, index) => {
           return <h1 key={index}>{orders.name}</h1>
        })}
    </div>)






}
export default OrderList;


// function OrderList() {
//     var [cake, setCakeList] = useState([])
//     axios({
//         method: 'post',
//         url: "https://apibyashu.herokuapp.com/api/cakeorders"
//     }).then((response) => {
//         cakes = response.data.data

//         setCakeList(response.data)

//         console.log(CakeList)
//         //   datafetched = true
//     }, ((error) => {
//         console.log(error)
//     }))
// }
// export default OrderList;















//  { <div class="accordion-item">
//                     <h2 class="accordion-header" id="headingOne">
//                     <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#order"+props.order.orderid} aria-expanded="true" aria-controls={"order"+props.order.orderid}>
//                     <strong>Order id #{props.order.orderid}</strong><strong style={{marginLeft:"30px"}}>Purchased on: {props.order.orderdate}</strong><strong style={{marginLeft:"30px"}}>Price: {props.order.price}</strong>
//                     </button>
//                     </h2>
//                     <div id={"order"+props.order.orderid} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                         <div class="accordion-body">
//                         {props.order.cakes.map(function(each){
//                         return(
//                         <Orderitemdetails orderdetails={each}></Orderitemdetails>
//                         );
//                     })}
//                         </div>
//                     </div>
//                 </div>


// }
