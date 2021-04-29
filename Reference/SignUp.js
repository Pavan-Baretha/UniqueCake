import { Component } from "react"
function validatePassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
var user = {}

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            errors: null
        }
    }
    handleEmail = (event) => {
        var email = event.target.value
        console.log("emeial is getting etntered", email)
        if (!email) {
            event.target.style.border = "red"
            this.setState({
                errors: {
                    email: "Email is required"
                }
            })
        }
        else if (!validateEmail(email)) {
            event.target.style.border = "red"
            this.setState({
                errors: {
                    email: "Invalid Email Syntax"
                }
            })
        }
        else {
            this.setState({
                errors: null
            })
        }
    }
    handlePassword = (event) => {
        var password = event.target.value
        if (!password) {
            event.target.style.border = "red"
            this.setState({
                errors: {
                    password: "Password is required"
                }
            })
        }
        else if (!validatePassword(password)) {
            event.target.style.border = "red"
            this.setState({
                errors: {
                    password: "It contains 8 letter password, with at least a symbol, upper and lower case letters and a number"

                }
            })
        }
        else {
            this.setState({
                errors: null
            })
        }
    }
    checkAll = (event) => {
        event.preventDefault()
        this.setState({
            errors: null
        })
        var form = document.getElementById('loginform')
        console.log(form)
        if ((!document.getElementById("email").value) && (!document.getElementById("pass").value)) {
            this.setState({
                errors: {
                    all: "Please enter the credential"
                }
            })
        } else {
            this.setState({
                errors: null
            })
        }
    }
    render() {
        return (
            <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-7">

                        <form id="loginform" >
                            <h3>Register Here</h3><br></br>

                            <div class="form-group">
                                <input name="emailfield" type="email" onChange={this.handleEmail} class="form-control" id="email" placeholder="Enter Username" /><br></br>
                                <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.email}</label>
                            </div>
                            <div class="form-group">
                                <input name="passwordField" type="password" onChange={this.handlePassword} class="form-control" id="pass" placeholder="Enter Password" /><br></br>
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.password}</label>
                            </div>
                            <div class="form-group " style={{ textAlign: "left" }}>
                                <button type="submit" onClick={this.checkAll} class="btn btn-primary">Sign Up</button>
                                {this.state.errors && this.state.errors.all}
                            </div>
                            {/* {this.state.errorMsg && <h6 style={{color:"red"}}>{this.state.errorMsg}</h6>} */}
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}

export default SignUp