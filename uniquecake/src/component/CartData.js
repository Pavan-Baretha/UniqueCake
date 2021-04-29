import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

var totalprice = 0
function CartData(props) {
    function removeFromCart(event) {
        event.preventDefault()
        axios({
            url: "https://apibyashu.herokuapp.com/api/removecakefromcart",
            method: "post",
            data: {
                cakeid: props.dataCake.cakeid,
                email: props.dataCake.email
            },
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
            toast.success(response.data.message)
            props.removefromcart(props.key1)
            console.log("response from add to cart api", response)
        }, (error) => {
            console.log("error from add to cart api", error)
        })
    }

    return (
        <div className="container">
            <div className="row">
                {console.log("I am here!!!!!!!!!!!! ", props)}
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img src={props.dataCake.image} style={{ height: "200px", width: "200px" }} class="img-responsive" alt="Image"></img>
                    <br></br><br></br><br></br><br></br>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <ul>
                        <li>{props.dataCake.cakeid}</li>
                        <li>{props.dataCake.name}</li>
                        <li>{props.dataCake.price}</li>
                        {/* <li>{props.searchcakedata.desciption}</li>
                        <li>{props.searchcakedata.rating}</li> */}
                    </ul>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <button type="button" onClick={removeFromCart} class="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>

    )
}
export default CartData