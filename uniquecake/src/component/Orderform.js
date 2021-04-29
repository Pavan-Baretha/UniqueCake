import { axios } from 'axios'
function OrderForm() {
    console.log("In order form now")
    var fetchAllData = () => {
        var user = {}
        var form = document.getElementById('Orderform')
        user.name = form["elements"]["namefield"].value
        user.address = form["elements"]["addressfield"].value
        user.city = form["elements"]["cityfield"].value
        user.pincode = form["elements"]["pincodefield"].value
        user.phone = form["elements"]["phonefield"].value
        user.email = form["elements"]["emailfield"].value
        // user.price = form["elements"]["namefield"].value
        // user.cakes = form["elements"]["namefield"].value
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
    }
    return (
        <div className="container">
            <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-7">

                        <form id="Orderform"  >
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



                            <div class="form-group " style={{ textAlign: "left" }}>
                                <button type="submit" onClick={fetchAllData} class="btn btn-primary">Order Now</button>
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
export default OrderForm