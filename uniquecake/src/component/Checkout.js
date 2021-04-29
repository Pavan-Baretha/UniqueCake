import axios from 'axios'
import queryparser from "query-string"
import { toast } from 'react-toastify'
import {Link} from "react-router-dom"
function Checkout(props) {
    var query = queryparser.parse(props.location.search)
    var result  = JSON.parse(query.cakes)
    console.log("hIIIIIIIIIIIII props data",result)
    var fetchAllData = () => {
        alert("hii")
        var user = {}
        
        console.log("hiiiiiiiii this query")
        console.log("Hiiiiiiiiii Come here")
        var form = document.getElementById('Orderform')
        user.name = document.getElementById('userName').value
        user.address = document.getElementById('userAddress').value
        user.city = document.getElementById('userCity').value
        user.pincode = document.getElementById('userPinCode').value
        user.phone = document.getElementById('userphone').value
        user.email = localStorage.email
        user.cakes = result
        user.price = query.price
        console.log(user)
        axios({
            url: 'https://apibyashu.herokuapp.com/api/addcakeorder',
            method: 'post',
            data: user,
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
        toast.success("Your order will placed soon Thanks for odering")
        props.history.push("/yourorder")
    }
    return (
        <div className="container">
            <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-7">

                        <form id="Order form"  >
                            <h3>Order Form</h3><br></br>

                            <div class="form-group">
                                <input name="namefield" type="text" class="form-control" id="userName" placeholder="Enter Username" /><br></br>
                            </div>
                            <div class="form-group">
                                <input name="addressfield" type="text" class="form-control" id="userAddress" placeholder="Enter Address" /><br></br>
                            </div>
                            <div class="form-group">
                                <input name="cityfield" type="text" class="form-control" id="userCity" placeholder="Enter City" /><br></br>
                            </div>
                            <div class="form-group">
                                <input name="pincodefield" type="text" class="form-control" id="userPinCode" placeholder="Enter Pincode" /><br></br>
                            </div>
                            <div class="form-group">
                                <input name="phonefield" type="text" class="form-control" id="userphone" placeholder="Enter Number" /><br></br>
                            </div>
                            <div class="form-group">
                                <input name="emailfield" type="email" class="form-control" id="useremail" placeholder="Enter email" /><br></br>
                            </div>
                            <div class="form-group">

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked disabled />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Only Cash
                                 </label>
                                </div>

                            </div>


                            <div class="form-group " style={{ textAlign: "left" }}>
                                <button type="button" onClick={fetchAllData} class="btn btn-primary">Order Now</button>
                            </div><br></br>
                            {/* New User Click Here<Link to="/signup"><a> Sing Up</a></Link> */}
                            {/* {this.state.errorMsg && <h6 style={{color:"red"}}>{this.state.errorMsg}</h6>} */}
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Checkout