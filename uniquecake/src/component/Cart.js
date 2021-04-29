import axios from "axios"
import { Component, useEffect, useState } from "react"
import CartData from "./CartData"
import { withRouter, Link } from "react-router-dom"
import { toast } from "react-toastify"
import data from "./data"
import Checkout from "./Checkout"
var total_price = 0
var count = 0
function Cart(props) {

    var [dataCake, setdataCake] = useState([])
    var removefromcart = (index) => {
        dataCake.splice(index, 1)
        var temp = [...dataCake]
        setdataCake(temp)
    }
    useEffect(function () {
        axios({
            url: "https://apibyashu.herokuapp.com/api/cakecart",
            method: "post",
            data: { email: localStorage.email },
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
            setdataCake(response.data.data)
            console.log("response from get acrt api", response.data)
        },
            (error) => {
                console.log(error);
            })
    }, [])
    
    var total=0;
    function cal(data){
        total=total+data;
    }
    function Checkout(){
        var url = "/checkout/?cakes="+JSON.stringify(dataCake)+"&price="+total
        console.log("This url is for testing"+url)
        props.history.push(url)
    }
    
 
    return (
        <div>
            {dataCake.map(function (x, index) {
                console.log(x.price);
                cal(x.price);
                return <CartData removefromcart={removefromcart} key1={index} dataCake={x} />
            })
            }
            <div>
                <h1>Total price:{total}</h1>
                <h1>Total Item:{count}</h1>
            </div>
            <button style={{ float: "right" }} onClick={Checkout}  class="btn bg-primary my-2 my-sm-0" type="submit">Checkout</button>
        </div>
    )
}

// class CartData extends Component{
//     constructor(){
//         super()
//         this.state ={
//             var dataCake =[]


//         }
//     }
// }

export default withRouter(Cart)