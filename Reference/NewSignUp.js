import { Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

class NewSignUp extends Component {
    constructor() {
        super()
        this.state = {
            errors: null,
        }
    }
    login(event) {
        event.preventDefault()
        let errors = {}
        this.setState({
            errors:null
        })
        
        var form = document.getElementById('loginform')
        console.log("form handed over to us is", form, form["elements"]["emailfield"])
        if (!form["elements"]["emailfield"].value) {
            errors.email = "Email is Required"
            form["elements"]["emailfield"].style["border-color"] = "red"
        }
        else if (!validateEmail(form["elements"]["emailfield"].value)) {
            errors.email = "Invalid email"
            form["elements"]["emailfield"].style["border-color"] = "red"

        }
        if (!form["elements"]["passwordField"].value) {
            errors.password = "Password is Required"
        }
        else if (!checkPassword(form["elements"]["passwordField"].value)) {
            errors.password = "It contains 8 letter password, with at least a symbol, upper and lower case letters and a number"
        }
        this.setState({
            errors:errors
        })
       var user = {}
        if(errors.email==null && errors.password==null)
        {
       
            user.email = form["elements"]["emailfield"].value
            user.password = form["elements"]["passwordField"].value
        }
        console.log(user) 
        
    }
    render() {
        return (
            <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-7">

                        <form id="loginform" >
                            <h3>Register Form</h3><br></br>
                            <div class="form-group">
                                <input name="namefield" type="text" class="form-control" id="" placeholder="Enter Username" /><br></br>
                                
                            </div>
                            <div class="form-group">
                                <input name="emailfield" type="email" class="form-control" id="" placeholder="Enter email" /><br></br>
                                <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.email}</label>
                            </div>
                            <div class="form-group">
                                <input name="passwordField" type="password" class="form-control" id="" placeholder="Enter Password" /><br></br>
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.password}</label>
                            </div>
                            <div class="form-group " style={{ textAlign: "left" }}>
                                <button onClick={this.login.bind(this)} type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                            {/* {this.state.errorMsg && <h6 style={{color:"red"}}>{this.state.errorMsg}</h6>} */}
                        </form>
                        <Link to="/login"><a>Already user click here</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewSignUp
