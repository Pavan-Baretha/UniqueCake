import { Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var em1 = "";
var pa = "";
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
class Login extends Component {
    constructor() {
        super()
        this.state = {
            errors: null,
            user: {}
        }
    }
    login(event) {
        event.preventDefault()
        this.setState({
            errors: null
        })
        var form = document.getElementById('loginform')
        // console.log("form handed over to us is", form, form["elements"]["emailfield"])
        if (!form["elements"]["emailfield"].value) {
            this.setState({
                errors: {
                    email: "Email is Required"
                }
            })
            form["elements"]["emailfield"].style["border-color"] = "red";

        }
        else if (!validateEmail(form["elements"]["emailfield"].value)) {
            this.setState({
                errors: {
                    email: "Invalid Email Syntax"
                }
            })
            form["elements"]["emailfield"].style["border-color"] = "red"


        }
        else if (!form["elements"]["passwordField"].value) {
            this.setState({
                errors: {
                    password: "Password is requried"
                }
            })

        }
        else if (!checkPassword(form["elements"]["passwordField"].value)) {
            this.setState({
                errors: {
                    password: "It contains 8 letter password, with at least a symbol, upper and lower case letters and a number"
                }
            })

        }
        else {

            let user = {
                email: form["elements"]["emailfield"].value,
                password: form["elements"]["passwordField"].value
            }
            console.log(user)

            axios({
                url: 'https://apibyashu.herokuapp.com/api/login',
                method: 'post',
                data: user
            }).then((response) => {
                console.log(" Hello"+response.data.token)
                if (response.data.token) {
                    localStorage.token = response.data.token
                    localStorage.email = response.data.email
                    localStorage.name = response.data.name
                    this.props.inform_login()
                    console.log("$$$$$$$$")
                }
                // console.log(response.data.message);

            }, (error) => {
                console.log(error);
            })
        }

    }
    render() {
        return (
            <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-7">

                        <form id="loginform"  >
                            <h3>Login Form</h3><br></br>

                            <div class="form-group">
                                <input name="emailfield" type="email" class="form-control" id="emailName" placeholder="Enter Username" /><br></br>
                                <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.email}</label>
                            </div>
                            <div class="form-group">
                                <input name="passwordField" type="password" class="form-control" id="passwordName" placeholder="Enter Password" /><br></br>
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.password}</label>
                                <Link to="/forgot"><a> Forgot Password?</a></Link>
                            </div>
                            <div class="form-group " style={{ textAlign: "left" }}>
                                <button onClick={this.login.bind(this)} type="submit" class="btn btn-primary">Login</button>
                            </div><br></br>
                            New User Click Here<Link to="/newsignup"><a> Sing Up</a></Link>
                            {/* {this.state.errorMsg && <h6 style={{color:"red"}}>{this.state.errorMsg}</h6>} */}
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
